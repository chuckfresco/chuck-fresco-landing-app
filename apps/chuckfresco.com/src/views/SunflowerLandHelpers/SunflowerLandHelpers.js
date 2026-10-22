import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import YakkamonReferral from "../../components/YakkamonReferral";
import useStyles from "./styles";
import { DAY_MS, FARM_ID, normalizeHelps, getMonthlyHelpers } from "./monthlyHelpers";

const helpIcon = "/assets/sunflower-land/icons/help.png";
const searchIcon = "/assets/sunflower-land/icons/search.png";
const sunflowerLogo = "/assets/sunflower-land/logo/logo_v2.png";
const getOrdinal = rank => rank === 1 ? "1st" : rank === 2 ? "2nd" : rank === 3 ? "3rd" : String(rank);
const relativeTime = timestamp => {
  const difference = Math.max(0, Date.now() - Number(timestamp));
  const [unit, size] = difference >= 86400000 ? ["day", 86400000] : difference >= 3600000 ? ["hour", 3600000] : ["minute", 60000];
  const count = Math.max(1, Math.round(difference / size));
  return `${count} ${unit}${count === 1 ? "" : "s"} ago`;
};
const farmUrl = `https://sunflower-land.com/play/#/visit/${FARM_ID}`;
const monthKey = timestamp => new Date(timestamp).toISOString().slice(0, 7);
const external = { target: "_blank", rel: "noopener noreferrer" };
const SunflowerLandHelpers = () => {
  const classes = useStyles();
  const [giveaway, setGiveaway] = useState(undefined);
  const [giveawayError, setGiveawayError] = useState(false);
  const [snapshot, setSnapshot] = useState(null);
  const [feed, setFeed] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(Date.now());
  const month = monthKey(now);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [todayOnly, setTodayOnly] = useState(false);
  const [farmCopyStatus, setFarmCopyStatus] = useState("");
  const farmCopyTimer = useRef(null);
  useEffect(() => () => window.clearTimeout(farmCopyTimer.current), []);
  const copyFarmId = async () => {
    try {
      await navigator.clipboard.writeText(FARM_ID);
      setFarmCopyStatus("Copied");
    } catch {
      setFarmCopyStatus("Copy failed");
    }
    window.clearTimeout(farmCopyTimer.current);
    farmCopyTimer.current = window.setTimeout(() => setFarmCopyStatus(""), 2000);
  };
  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch("/assets/sunflower-land/helperHelps.json", { cache: "no-cache" });
        if (!response.ok) throw new Error("Snapshot unavailable");
        const payload = await response.json();
        const entries = normalizeHelps(payload);
        if (active) { setFeed(entries); setSnapshot(payload); setError(""); }
      } catch {
        if (active) setError("Help data could not be refreshed. Please try again shortly.");
      } finally { if (active) setLoading(false); }
    };
    load();
    const refresh = window.setInterval(load, 60000);
    const clock = window.setInterval(() => setNow(Date.now()), 60000);
    return () => { active = false; window.clearInterval(refresh); window.clearInterval(clock); };
  }, []);
  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch("/assets/sunflower-land/xGiveaway.json", { cache: "no-store" });
        if (!response.ok) throw new Error("Giveaway unavailable");
        const data = await response.json();
        if (data.statusId !== null && !/^\d+$/.test(data.statusId || "")) throw new Error("Invalid giveaway");
        if (active) { setGiveaway(data); setGiveawayError(false); }
      } catch {
        if (active) setGiveawayError(true);
      }
    };
    load();
    const refresh = window.setInterval(load, 60000);
    return () => { active = false; window.clearInterval(refresh); };
  }, []);
  const giveawayUrl = giveaway?.statusId ? `https://x.com/i/status/${giveaway.statusId}` : null;
  const result = useMemo(() => getMonthlyHelpers(feed, month, now), [feed, month, now]);
  const query = search.trim().toLowerCase();
  const ranked = result.leaderboard.map((player, index) => ({ ...player, rank: index + 1 }));
  const matches = ranked.filter(player => player.name.toLowerCase().includes(query) || player.id.includes(query));
  const pages = Math.max(1, Math.ceil(matches.length / 10));
  const safePage = Math.min(page, pages - 1);
  const visible = matches.slice(safePage * 10, safePage * 10 + 10);
  const activity = feed.filter(item => !todayOnly || Math.floor(item.createdAt / DAY_MS) === Math.floor(now / DAY_MS));
  const updatedAt = Date.parse(snapshot?.snapshotAt);
  return (
    <div className={classes.page}>
      <Helmet>
        <title>Monthly Sunflower Land Helpers | Chuck Fresco</title>
        <meta name="description" content="Track monthly Sunflower Land helps and daily streaks. Join Chuck Fresco's #sflgiveaway on X." />
        <link rel="canonical" href="https://chuckfresco.com/sfl/helpers" />
      </Helmet>
      <header className={classes.hero}><div className={classes.heroInner}>
        <div className={classes.heroCopy}>
          <h1 className={classes.heroTitle}>Sunflower Land Helpers</h1>
          <p className={classes.heroSubtitle}>Every helping hand counts. Track your monthly helps and keep your streak growing.</p>
        </div>
        <div className={classes.heroLogoPanel}><img src="/assets/sunflower-land/logo/logo_v2.png" alt="Sunflower Land" className={classes.heroLogo} /></div>
      </div></header>
      <div className={classes.referral}>
        <span className={classes.referralText}>Support me with referral code:</span>
        <a className={classes.referralLink} href="https://sunflower-land.com/play/?ref=ChuckFresco" {...external}>ChuckFresco</a>
      </div>
      <YakkamonReferral />
      <nav className={classes.sunflowerNav} aria-label="Sunflower Land pages">
        {[["/sfl/helpers", "Leaderboard"], ["/sfl/fishing", "Fishing"], ["/sfl/fish-market", "Fish Market"], ["/sfl/crops", "Crops"], ["/sfl/flowers", "Flowers"]].map(([url, label]) =>
          <Link key={url} className={classes.sunflowerNavLink} to={url}>{label}</Link>)}
      </nav>
      <main className={classes.shell}>
        <div className={classes.giveawayLayout}>
        <section className={classes.infoPanel}>
          <h2 className={classes.panelTitle}>Helpers Giveaway</h2>
          <div className={classes.payoutNotice} role="note" aria-label="Payout requirement">
            <img src="/assets/sunflower-land/ronin-wallet.png" alt="Ronin Wallet" className={classes.payoutNoticeLogo} />
            <div>
              <strong className={classes.payoutNoticeTitle}>Payout requirement</strong>
              Prizes are paid to a <strong>Ronin Wallet address only</strong>. You must have one to claim your FLOWER.{" "}
              <a href="https://welcome.skymavis.com/create-wallet/" {...external}>Create a Ronin Wallet ↗</a>
            </div>
          </div>
          <p>Giveaways now take place on <a href="https://x.com/chuckfresco" {...external}>@chuckfresco on X (Twitter)</a>. Look for #sflgiveaway and follow the giveaway post to enter.</p>
          <div className={classes.infoCallout}>
          <h3 className={classes.calloutTitle}>How to enter</h3>
          <ol className={classes.entrySteps}>
            <li>Follow <a href="https://x.com/chuckfresco" {...external}>@chuckfresco</a> and <a href="https://x.com/mrsfresco" {...external}>@mrsfresco</a>.</li>
            <li>LIKE &amp; Repost the giveaway post.</li>
            <li><a href={farmUrl} {...external}>Help my land — Farm #{FARM_ID}</a>.</li>
            <li>Reply to the giveaway post with your farm ID and favorite crop to grow.</li>
          </ol>
          </div>
          <div className={classes.infoActions}>
            <a className={`${classes.infoButton} ${classes.xButton}`} href="https://x.com/chuckfresco" {...external}>𝕏 Follow on X</a>
            <a className={`${classes.infoButton} ${classes.helpLandButton}`} href={farmUrl} {...external}><img src={searchIcon} alt="" className={classes.farmSearchIcon} />Help my land</a>
          </div>
          <p className={classes.infoFootnote}>This leaderboard tracks in-game helps only. Giveaway entries and results are handled on X.</p>
        </section>
        <section className={classes.giveawayPanel} aria-label="Current contest on X">
          <h2 className={classes.giveawayTitle}>𝕏 Current Contest</h2>
          {giveawayError ? <p role="status">Contest could not be refreshed. Please try again shortly.</p> : null}
          {giveawayUrl ? <>
            <iframe key={giveaway.statusId} className={classes.giveawayEmbed} title="Current giveaway on X"
              src={`https://platform.twitter.com/embed/Tweet.html?id=${giveaway.statusId}&theme=dark&dnt=true`} />
            <a className={classes.giveawayLink} href={giveawayUrl} {...external}>Open contest on X ↗</a>
          </> : <p className={classes.giveawayEmpty} role="status">{giveaway ? "No active contest" : giveawayError ? "Check back soon." : "Loading current contest…"}</p>}
        </section>
        </div>
        <div className={classes.layout}>
          <section className={classes.panel}>
            <div className={classes.header}>
              <div className={classes.brand}>
                <img src={sunflowerLogo} alt="Sunflower Land" className={classes.logo} />
                <h2 className={classes.title}>Helpers</h2>
              </div>
              <div className={classes.headerActions}>
                <button type="button" className={`${classes.farmTag} ${farmCopyStatus === "Copied" ? classes.farmTagCopied : ""}`} onClick={copyFarmId} aria-label={farmCopyStatus || `Copy farm ID ${FARM_ID}`} title="Copy farm ID">
                  <img src={searchIcon} alt="" className={classes.farmSearchIcon} />
                  <span className={classes.farmTagLabel}>
                    <span style={{ visibility: farmCopyStatus ? "hidden" : "visible" }}>Farm ID #{FARM_ID}</span>
                    <span role="status">{farmCopyStatus}</span>
                  </span>
                </button>
                <div className={classes.updateMeta}>Last updated: {Number.isFinite(updatedAt) ? new Date(updatedAt).toLocaleString() : "Unavailable"}</div>
              </div>
            </div>
            <nav className={classes.tabs} aria-label="Help activity filters">
              <button type="button" className={`${classes.tab} ${!todayOnly ? classes.activeTab : ""}`} onClick={() => setTodayOnly(false)}>
                <img src={helpIcon} alt="" className={classes.tabIcon} />Helped {feed.length}
              </button>
              <button type="button" className={`${classes.tab} ${todayOnly ? classes.activeTab : ""}`} onClick={() => setTodayOnly(true)}>Today (UTC)</button>
            </nav>
            <div className={classes.stats}>
              <div className={classes.stat}>Helpers: {new Set(feed.map(item => String(item.sender.id))).size}</div>
              <div className={classes.stat}>Month total: {result.activity.length}</div>
            </div>
            {error && <p role="alert" className={classes.error}>{error}</p>}
            <div className={classes.feed}>
              {activity.map(item => (
                <article className={classes.row} key={item.sender.id + ":" + item.createdAt}>
                  <div className={classes.avatar}>{(item.sender.username || "?").charAt(0).toUpperCase()}</div>
                  <div>
                    <div className={classes.nameLine}>
                      {item.sender.username} - {relativeTime(item.createdAt)}
                      {Math.floor(item.createdAt / DAY_MS) === Math.floor(now / DAY_MS) && <span className={classes.statusPill}>today</span>}
                    </div>
                    <div className={classes.message}>{item.message || "Helped your farm!"}</div>
                  </div>
                  <img src={helpIcon} alt="Helped" className={classes.actionIcon} />
                </article>
              ))}
              {!activity.length && <div className={classes.empty}>{loading ? "Loading activity…" : "No helpers found for this filter."}</div>}
            </div>
          </section>
          <aside className={`${classes.panel} ${classes.board}`}>
            <div className={classes.boardHeader}><h2 className={classes.panelTitle}>{new Date(now).toLocaleDateString("en-US", { month: "long", timeZone: "UTC" })} Top Helpers</h2></div>
            <p className={classes.boardMeta}><strong>Total helps this month. Monthly totals reset on the 1st at 00:00 UTC.</strong></p>
            <p className={classes.boardParticipantCount}>
              <span className={classes.boardParticipantNumber}>{ranked.length.toLocaleString()}</span>
              {ranked.length === 1 ? "Participant" : "Participants"}
            </p>
            <input type="search" className={classes.leaderboardSearch} aria-label="Search Top Helpers by player name or farm ID" placeholder="Find your player name" value={search} onChange={event => { setSearch(event.target.value); setPage(0); }} />
            <ol className={classes.leaderboardList}>
              {visible.map(player => {
                const rank = player.rank;
                const rankClass = rank === 1
                  ? classes.goldRank
                  : rank === 2
                    ? classes.silverRank
                    : rank === 3
                      ? classes.bronzeRank
                      : classes.normalRank;
                const rowClass = rank === 1
                  ? classes.goldRow
                  : rank === 2
                    ? classes.silverRow
                    : rank === 3
                      ? classes.bronzeRow
                      : "";
                const statsClass = rank === 3
                  ? classes.bronzeRankStats
                  : rank <= 2
                    ? classes.topRankStats
                    : "";
                const totalClass = rank === 3
                  ? classes.bronzeRankTotal
                  : rank <= 2
                    ? classes.topRankTotal
                    : "";

                return (
                  <li
                    className={`${classes.leaderboardRow} ${rank <= 3 ? classes.topRankRow : ""} ${rowClass}`}
                    key={player.id}
                  >
                    <span className={`${classes.rankBadge} ${rankClass}`}>
                      {getOrdinal(rank)}
                    </span>
                    <div className={classes.leaderboardDetails}>
                      <div className={classes.leaderboardNameRow}>
                        {player.id ? (
                          <a
                            className={`${classes.leaderboardName} ${classes.leaderboardNameLink}`}
                            href={`https://sunflower-land.com/play/#/visit/${encodeURIComponent(player.id)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Visit ${player.name}'s farm`}
                          >
                            {player.name}
                          </a>
                        ) : (
                          <div className={classes.leaderboardName}>{player.name}</div>
                        )}
                        {player.id && (
                          <a
                            className={classes.leaderboardFarmId}
                            href={`https://sunflower-land.com/play/#/visit/${encodeURIComponent(player.id)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Visit ${player.name}'s farm #${player.id}`}
                            aria-label={`Visit ${player.name}'s farm, ID ${player.id}`}
                          >
                            #{player.id}
                          </a>
                        )}
                      </div>
                      <div className={`${classes.leaderboardStats} ${statsClass}`}>
                        <img src={helpIcon} alt="" className={classes.leaderboardIcon} />
                        <span className={`${classes.leaderboardTotal} ${totalClass}`}>Month total {player.helps}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

          {!visible.length && <p className={classes.empty}>{loading ? "Loading helps…" : query ? "No matching helpers." : "No helps recorded for this month yet."}</p>}
          <div className={classes.leaderboardPagination}>
            <button className={classes.leaderboardPageButton} disabled={safePage === 0} onClick={() => setPage(safePage - 1)} aria-label="Previous leaderboard page"><ChevronLeftIcon className={classes.leaderboardPageIcon} /></button>
            <span className={classes.leaderboardPageMeta}>Page {safePage + 1} of {pages} · {matches.length} helpers</span>
            <button className={classes.leaderboardPageButton} disabled={safePage + 1 >= pages} onClick={() => setPage(safePage + 1)} aria-label="Next leaderboard page"><ChevronRightIcon className={classes.leaderboardPageIcon} /></button>
          </div>
          </aside>
        </div>
      </main>
    </div>
  );
};
export default SunflowerLandHelpers;
