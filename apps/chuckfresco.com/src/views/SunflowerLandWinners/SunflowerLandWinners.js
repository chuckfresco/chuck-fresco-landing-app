import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const winnersUrl = "/assets/sunflower-land/winners.json";
const flowerIcon = "/assets/sunflower-land/fishing/imgi_10_Flower.png";

const useStyles = makeStyles(theme => ({
  page: {
    minHeight: "100vh",
    padding: "30px 12px 50px",
    background: "#27364c",
    color: "#332235",
    fontFamily: "'Courier New', monospace"
  },
  shell: { maxWidth: 1180, margin: "0 auto" },
  sunflowerNav: {
    width: "calc(100% + 24px)",
    margin: "-30px -12px 18px",
    padding: "8px 12px",
    background: "#27364c",
    borderBottom: "4px solid #101018",
    display: "flex",
    justifyContent: "center",
    gap: 8,
    flexWrap: "wrap"
  },
  sunflowerNavLink: {
    minHeight: 32,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff8d6",
    background: "#1f5da8",
    border: "3px solid #101018",
    borderRadius: 8,
    boxShadow: "inset 0 0 0 2px rgba(255,248,214,.22)",
    fontFamily: "SmallestPixel7,'Courier New',monospace",
    fontSize: 18,
    fontWeight: 900,
    lineHeight: 1,
    padding: "4px 12px",
    textDecoration: "none",
    whiteSpace: "nowrap",
    "&:hover": { color: "#fff8d6", textDecoration: "none", filter: "brightness(1.08)" },
    [theme.breakpoints.down("xs")]: { flex: "1 1 132px", fontSize: 16 }
  },
  activeSunflowerNavLink: {
    color: "#20192b",
    background: "#f4c08a",
    boxShadow: "inset 0 0 0 2px #fff8d6",
    "&:hover": { color: "#20192b" }
  },
  header: {
    marginBottom: 20,
    padding: 20,
    background: "#fff8d6",
    border: "4px solid #101018",
    borderRadius: 14,
    boxShadow: "inset 0 0 0 4px #f4c08a, 8px 8px 0 rgba(0,0,0,0.22)"
  },
  title: { display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap", margin: 0, fontSize: 36, lineHeight: 1.1, fontWeight: 900 },
  subtitle: { margin: "8px 0 0", fontWeight: 900, lineHeight: 1.5 },
  raffleList: { display: "grid", gap: 20 },
  raffle: {
    padding: 16,
    background: "#e8ad76",
    border: "4px solid #101018",
    borderRadius: 14,
    boxShadow: "inset 0 0 0 4px #f8d29b, 8px 8px 0 rgba(0,0,0,0.22)"
  },
  raffleHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 14,
    flexWrap: "wrap"
  },
  raffleTitle: { margin: 0, fontSize: 23, fontWeight: 900 },
  prize: { display: "inline-flex", alignItems: "center", gap: 5, fontWeight: 900 },
  flower: { width: 25, height: 25, imageRendering: "pixelated" },
  inlineFlower: {
    width: 16,
    height: 16,
    margin: "0 3px",
    verticalAlign: "-2px",
    imageRendering: "pixelated"
  },
  winners: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 10,
    [theme.breakpoints.down("sm")]: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
    [theme.breakpoints.down("xs")]: { gridTemplateColumns: "1fr" }
  },
  winner: {
    minWidth: 0,
    padding: 11,
    background: "#2876d5",
    border: "3px solid #101018",
    borderRadius: 10,
    boxShadow: "inset 0 0 0 2px #55b6ff",
    color: "#fff8d6",
    fontWeight: 900
  },
  winnerName: {
    display: "block",
    overflow: "hidden",
    color: "#fff",
    fontSize: 17,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    textDecoration: "underline",
    "&:hover": { color: "#fff2a8" }
  },
  winnerMeta: { marginTop: 6, fontSize: 13, lineHeight: 1.35 },
  empty: {
    padding: 30,
    background: "#fff8d6",
    border: "4px solid #101018",
    borderRadius: 14,
    fontWeight: 900,
    textAlign: "center"
  },
  error: { color: "#8a1c1c" }
}));

const formatDate = value => new Date(value).toLocaleString(undefined, {
  timeZone: "America/Los_Angeles",
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  timeZoneName: "short"
});

const SunflowerLandWinners = () => {
  const classes = useStyles();
  const [raffles, setRaffles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    fetch(winnersUrl, { cache: "no-cache" })
      .then(response => {
        if (response.status === 404) return { raffles: [] };
        if (!response.ok) throw new Error(`Winner archive request failed: ${response.status}`);
        return response.json();
      })
      .then(payload => {
        if (!mounted) return;
        setRaffles(Array.isArray(payload.raffles) ? payload.raffles : []);
        setLoading(false);
      })
      .catch(() => {
        if (!mounted) return;
        setError("The winner archive is temporarily unavailable.");
        setLoading(false);
      });
    return () => { mounted = false; };
  }, []);

  return (
    <div className={classes.page}>
      <Helmet>
        <title>Sunflower Land Raffle Winners | Chuck Fresco</title>
        <meta name="description" content="See current and past winners of Chuck Fresco's Sunflower Land FLOWER raffle." />
      </Helmet>
      <nav className={classes.sunflowerNav} aria-label="Sunflower Land pages">
        <Link className={`${classes.sunflowerNavLink} ${classes.activeSunflowerNavLink}`} to="/sfl/helpers">Leaderboard</Link>
        <Link className={classes.sunflowerNavLink} to="/sfl/fishing">Fishing</Link>
        <Link className={classes.sunflowerNavLink} to="/sfl/fish-market">Fish Market</Link>
        <Link className={classes.sunflowerNavLink} to="/sfl/crops">Crops</Link>
      </nav>
      <main className={classes.shell}>
        <header className={classes.header}>
          <h1 className={classes.title}>
            <img src={flowerIcon} alt="Flower" className={classes.flower} />
            FLOWER Raffle Winners
          </h1>
          <p className={classes.subtitle}>
            Eight community supporters win 20
            <img src={flowerIcon} alt="Flower" className={classes.inlineFlower} />
            FLOWER in every completed drawing.
          </p>
        </header>

        {loading && <div className={classes.empty}>Loading winner history...</div>}
        {error && <div className={`${classes.empty} ${classes.error}`}>{error}</div>}
        {!loading && !error && !raffles.length && (
          <div className={classes.empty}>No drawings have been archived yet. Check back after the first raffle!</div>
        )}

        <div className={classes.raffleList}>
          {raffles.map(raffle => (
            <section className={classes.raffle} key={raffle.contestStart}>
              <div className={classes.raffleHeader}>
                <div>
                  <h2 className={classes.raffleTitle}>Drawing ending {formatDate(raffle.contestEnd)}</h2>
                  <div>Contest began {formatDate(raffle.contestStart)}</div>
                </div>
                <div className={classes.prize}>
                  {raffle.totalPrize || 160}
                  <img src={flowerIcon} alt="Flower" className={classes.flower} />
                  FLOWER awarded
                </div>
              </div>
              <div className={classes.winners}>
                {(raffle.winners || []).map((winner, index) => (
                  <article className={classes.winner} key={`${raffle.contestStart}-${winner.farmId}`}>
                    <a
                      className={classes.winnerName}
                      href={`https://sunflower-land.com/play/#/visit/${encodeURIComponent(winner.farmId)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      #{index + 1} {winner.username}
                    </a>
                    <div className={classes.winnerMeta}>{winner.tickets} raffle tickets</div>
                    <div className={classes.prize}>
                      {winner.prize}
                      <img src={flowerIcon} alt="Flower" className={classes.flower} />
                      FLOWER
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SunflowerLandWinners;
