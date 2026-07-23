import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import AxieDomNav from "./AxieDomNav";
import "./styles.css";

const ASSET_BASE = "/assets/axie/axie-dom";

const upgrades = [
  { tier: "S", file: "attack_up", name: "Sharp Blade", keywords: "+1 attack epic all floors" },
  { tier: "S", file: "retaliation", name: "Retaliation", keywords: "reflect damage rare all floors" },
  { tier: "S", file: "bone_breaker", name: "Bone Breaker", keywords: "skeleton damage common floor 10" },
  { tier: "S", file: "berserker", name: "Berserker", keywords: "attack low energy epic all floors" },
  { tier: "S", file: "max_energy_large", name: "Vigor II", keywords: "max energy passive epic floor 1 5" },
  { tier: "S", file: "max_energy_small", name: "Vigor I", keywords: "max energy passive rare floor 1 5" },
  { tier: "S", file: "fatal_edge", name: "Fatal Edge", keywords: "+1 attack +1 defense legendary" },
  { tier: "S", file: "battle_momentum", name: "Battle Momentum", keywords: "after kill attack +1 damage 3 floors" },
  { tier: "A", file: "dodge_roll", name: "Dodge Roll", keywords: "dodge chance epic floor 5" },
  { tier: "A", file: "armor_plating", name: "Armor Plating", keywords: "reduce damage armor epic floor 5" },
  { tier: "A", file: "shield", name: "Barrier", keywords: "block hits epic floor 5" },
  { tier: "A", file: "treasure_bonus", name: "Golden Touch", keywords: "treasure rare floor 10" },
  { tier: "A", file: "scavenger", name: "Scavenger", keywords: "loot pots crates rare floor 10" },
  { tier: "A", file: "lucky_find", name: "Lucky Find", keywords: "loot drops rare floor 10" },
  { tier: "A", file: "thorns", name: "Thorns", keywords: "reflect damage rare floor 4 8" },
  { tier: "A", file: "scout", name: "Scout", keywords: "reveal map epic floor 4 7" },
  { tier: "A", file: "hardened", name: "Hardened", keywords: "30% chance reduce damage 1 2 3 floors" },
  { tier: "A", file: "merciless", name: "Merciless", keywords: "+1 damage enemies half health or lower 3 floors" },
  { tier: "B", file: "trap_sight", name: "Trap Sight", keywords: "reveal traps rare floor 3 6" },
  { tier: "B", file: "vampiric", name: "Life Steal", keywords: "energy kill epic floor 4 6" },
  { tier: "B", file: "momentum", name: "Momentum", keywords: "free move kill rare floor 1 5" },
  { tier: "B", file: "executioner", name: "Mimic Sense", keywords: "reveal hidden mimics rare floor 5 7" },
  { tier: "B", file: "critical_strike", name: "Crit Strike", keywords: "critical chance epic sharp blade bone" },
  { tier: "C", file: "poison_blade", name: "Poison Blade", keywords: "poison enemies epic floor 5 6" },
  { tier: "C", file: "magnet", name: "Magnetic Pull", keywords: "pickup common floor 8 9" },
  { tier: "C", file: "tough_hide", name: "Tough Hide", keywords: "block hits common floor 5 6" },
  { tier: "C", file: "soft_traps", name: "Soft Traps", keywords: "halve trap damage rare floor 3 5" },
  { tier: "C", file: "spirit_ward", name: "Spirit Ward", keywords: "ghost damage knock back epic floor 5 6" },
  { tier: "D", file: "vision_boost", name: "Eagle Eye", keywords: "vision common floor 5" },
  { tier: "D", file: "heal_large", name: "Energy Wave", keywords: "restore energy instant rare" },
  { tier: "D", file: "swift_steps", name: "Light Feet", keywords: "free movement turns epic" },
  { tier: "D", file: "quick_step", name: "Quick Step", keywords: "free moves common floor 5" },
  { tier: "D", file: "patch_up", name: "Patch Up", keywords: "restore energy instant common" },
  { tier: "D", file: "heal_small", name: "Energy Surge", keywords: "restore energy instant common" },
  { tier: "D", file: "portal_adept", name: "Portal Adept", keywords: "portal free common floor 5" },
  { tier: "D", file: "sprint", name: "Sprint", keywords: "free moves rare" },
  { tier: "D", file: "treasure_hunter", name: "Treasure Hunter", keywords: "chests item rare floor 5" },
  { tier: "D", file: "invisibility", name: "Shadow Cloak", keywords: "invisible ambush epic turns" },
  { tier: "D", file: "cleave", name: "Cleave", keywords: "adjacent enemies damage rare floor 5" },
  { tier: "D", file: "reach", name: "Reach", keywords: "strike up to 2 enemies straight line 3 floors" }
];

const tiers = ["S", "A", "B", "C", "D"];

const AxieDom = () => {
  const [query, setQuery] = useState("");
  const [activeTiers, setActiveTiers] = useState([]);
  const [rankings, setRankings] = useState(upgrades);
  const [draggedFile, setDraggedFile] = useState(null);
  const [dropBeforeFile, setDropBeforeFile] = useState(null);
  const [dropAfterFile, setDropAfterFile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return rankings.filter(upgrade => {
      const matchesTier = !activeTiers.length || activeTiers.includes(upgrade.tier);
      const matchesSearch = !search || `${upgrade.name} ${upgrade.keywords} tier ${upgrade.tier}`.toLowerCase().includes(search);
      return matchesTier && matchesSearch;
    });
  }, [activeTiers, query, rankings]);

  const toggleTier = tier => {
    if (tier === "ALL") {
      setActiveTiers([]);
      return;
    }

    setActiveTiers(current =>
      current.includes(tier)
        ? current.filter(activeTier => activeTier !== tier)
        : [...current, tier]
    );
  };

  const moveUpgrade = (file, tier, beforeFile = null) => {
    setRankings(current => {
      const moving = current.find(item => item.file === file);
      if (!moving) return current;
      const remaining = current.filter(item => item.file !== file);
      const moved = { ...moving, tier };
      if (!beforeFile || beforeFile === file) return [...remaining, moved];
      const targetIndex = remaining.findIndex(item => item.file === beforeFile);
      if (targetIndex < 0) return [...remaining, moved];
      return [...remaining.slice(0, targetIndex), moved, ...remaining.slice(targetIndex)];
    });
  };

  const moveUpgradeAfter = (file, tier, afterFile) => {
    const tierItems = rankings.filter(item => item.tier === tier && item.file !== file);
    const afterIndex = tierItems.findIndex(item => item.file === afterFile);
    const nextItem = tierItems[afterIndex + 1];
    moveUpgrade(file, tier, nextItem ? nextItem.file : null);
  };

  const loadImage = src => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });

  const saveSnapshot = async () => {
    setIsSaving(true);
    try {
      const width = 1600;
      const labelWidth = 120;
      const cardWidth = 180;
      const cardHeight = 153;
      const gap = 6;
      const padding = 12;
      const columns = 7;
      const headerHeight = 150;
      const tierHeights = tiers.map(tier => {
        const count = rankings.filter(item => item.tier === tier).length;
        return Math.max(176, Math.ceil(count / columns) * (cardHeight + gap) + padding * 2);
      });
      const height = headerHeight + tierHeights.reduce((sum, value) => sum + value, 0) + 40;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      const tierColors = { S: "#ff747b", A: "#ffb86f", B: "#ffe181", C: "#f5f476", D: "#a9ef70" };

      context.fillStyle = "#180e0a";
      context.fillRect(0, 0, width, height);
      context.fillStyle = "#ffbd24";
      context.font = "900 24px Arial";
      context.fillText("AXIE: DEN OF MYSTERIES", 42, 48);
      context.fillStyle = "#ffffff";
      context.font = "900 54px Arial";
      context.fillText("POWER-UP TIER LIST", 42, 108);
      context.fillStyle = "#9f8980";
      context.font = "700 18px Arial";
      context.fillText("chuckfresco.com", 1370, 104);

      let y = headerHeight;
      for (let tierIndex = 0; tierIndex < tiers.length; tierIndex += 1) {
        const tier = tiers[tierIndex];
        const items = rankings.filter(item => item.tier === tier);
        const rowHeight = tierHeights[tierIndex];
        context.fillStyle = tierColors[tier];
        context.fillRect(0, y, labelWidth, rowHeight);
        context.fillStyle = "#24130c";
        context.textAlign = "center";
        context.font = "900 68px Arial";
        context.fillText(tier, labelWidth / 2, y + rowHeight / 2 + 18);
        context.fillStyle = tierIndex % 2 ? "#160d09" : "#1c100b";
        context.fillRect(labelWidth, y, width - labelWidth, rowHeight);

        const images = await Promise.all(items.map(item => loadImage(`${ASSET_BASE}/upgrades/${item.file}.png`)));
        const tierY = y;
        images.forEach((image, index) => {
          const column = index % columns;
          const row = Math.floor(index / columns);
          const x = labelWidth + padding + column * (cardWidth + gap);
          const cardY = tierY + padding + row * (cardHeight + gap);
          context.drawImage(image, x, cardY, cardWidth, cardHeight);
        });
        y += rowHeight;
      }
      context.textAlign = "left";
      canvas.toBlob(blob => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "axie-dom-power-up-tier-list.png";
        link.click();
        URL.revokeObjectURL(url);
      }, "image/png");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="axie-dom-page">
      <Helmet>
        <title>Axie DOM Upgrade Tier List | Chuck Fresco</title>
        <meta name="description" content="Search and browse every Axie: Den of Mysteries power-up by tier." />
        <link rel="canonical" href="https://chuckfresco.com/axie-dom/power-ups" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Chuck Fresco" />
        <meta property="og:title" content="Axie DOM Power Up Tier List" />
        <meta property="og:description" content="Search, rank, customize, and share every Axie: Den of Mysteries power up." />
        <meta property="og:url" content="https://chuckfresco.com/axie-dom/power-ups" />
        <meta property="og:image" content="https://chuckfresco.com/assets/social/previews/axie-dom-power-ups.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Axie Den of Mysteries Power Up Tier List" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ChuckFresco" />
        <meta name="twitter:title" content="Axie DOM Power Up Tier List" />
        <meta name="twitter:description" content="Search, rank, customize, and share every Axie: Den of Mysteries power up." />
        <meta name="twitter:image" content="https://chuckfresco.com/assets/social/previews/axie-dom-power-ups.jpg" />
        <meta name="twitter:image:alt" content="Axie Den of Mysteries Power Up Tier List" />
      </Helmet>

      <section
        className="dom-hero"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(25,12,8,.98) 0%, rgba(47,24,14,.88) 53%, rgba(38,17,10,.2) 100%), url(${ASSET_BASE}/dom_scene.gif)` }}
      >
        <div className="dom-hero__glow" />
        <div className="dom-hero__content">
          <span className="dom-kicker">DEN OF MYSTERIES</span>
          <img className="dom-logo" src={`${ASSET_BASE}/axie-dom-logo.webp`} alt="Axie Den of Mysteries" />
          <h1>POWER-UP TIER LIST</h1>
          <p>Find the strongest upgrade for your next run. Search by name, effect, rarity, or floor.</p>
        </div>
        <img className="dom-hero__buba" src={`${ASSET_BASE}/buba_idle.gif`} alt="Buba" />
      </section>

      <AxieDomNav />

      <section className="dom-content" aria-labelledby="tier-list-title">
        <div className="dom-panel-heading">
          <div>
            <span className="dom-section-label">CHOOSE AN UPGRADE</span>
            <h2 id="tier-list-title">UPGRADE RANKINGS</h2>
          </div>
          <div className="dom-ranking-actions">
            <span className="dom-count">{filtered.length}/{upgrades.length} POWER-UPS</span>
            <button type="button" className="dom-reset-button" onClick={() => setRankings(upgrades)}>RESET DEFAULT</button>
            <button type="button" className="dom-save-button" onClick={saveSnapshot} disabled={isSaving}>{isSaving ? "SAVING..." : "SAVE SNAPSHOT"}</button>
          </div>
        </div>

        <div className="dom-toolbar">
          <label className="dom-search">
            <SearchIcon aria-hidden="true" />
            <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search power-ups, effects, floors..." aria-label="Search power-ups" />
            {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><CloseIcon /></button>}
          </label>
          <div className="dom-tier-filters" aria-label="Filter by tier">
            {["ALL", ...tiers].map(tier => (
              <button
                key={tier}
                type="button"
                className={(tier === "ALL" ? !activeTiers.length : activeTiers.includes(tier)) ? "is-active" : ""}
                aria-pressed={tier === "ALL" ? !activeTiers.length : activeTiers.includes(tier)}
                onClick={() => toggleTier(tier)}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

        <div className="dom-tier-list">
          {tiers.map(tier => {
            const tierItems = filtered.filter(item => item.tier === tier);
            if (!tierItems.length) return null;
            return (
              <section
                className={`dom-tier dom-tier--${tier.toLowerCase()}`}
                key={tier}
                onDragOver={event => event.preventDefault()}
                onDrop={event => {
                  event.preventDefault();
                  if (draggedFile) moveUpgrade(draggedFile, tier);
                  setDraggedFile(null);
                  setDropBeforeFile(null);
                  setDropAfterFile(null);
                }}
              >
                <div className="dom-tier__rank"><span>{tier}</span><small>TIER</small></div>
                <div className="dom-tier__cards">
                  {tierItems.map(item => (
                    <React.Fragment key={item.file}>
                      {draggedFile && draggedFile !== item.file && dropBeforeFile === item.file && (
                        <div
                          className="dom-drop-slot"
                          aria-hidden="true"
                          onDragOver={event => event.preventDefault()}
                          onDrop={event => {
                            event.preventDefault();
                            event.stopPropagation();
                            moveUpgrade(draggedFile, tier, item.file);
                            setDraggedFile(null);
                            setDropBeforeFile(null);
                            setDropAfterFile(null);
                          }}
                        >
                          <span>DROP HERE</span>
                        </div>
                      )}
                      <article
                        className={`dom-card ${draggedFile === item.file ? "is-dragging" : ""}`}
                        title={`Drag ${item.name} to change its rank`}
                        draggable
                        onDragStart={event => {
                          setDraggedFile(item.file);
                          setDropBeforeFile(null);
                          setDropAfterFile(null);
                          event.dataTransfer.effectAllowed = "move";
                          event.dataTransfer.setData("text/plain", item.file);
                        }}
                        onDragEnd={() => {
                          setDraggedFile(null);
                          setDropBeforeFile(null);
                          setDropAfterFile(null);
                        }}
                        onDragOver={event => {
                          event.preventDefault();
                          if (!draggedFile || draggedFile === item.file) return;
                          const bounds = event.currentTarget.getBoundingClientRect();
                          const isRightHalf = event.clientX > bounds.left + bounds.width / 2;
                          setDropBeforeFile(isRightHalf ? null : item.file);
                          setDropAfterFile(isRightHalf ? item.file : null);
                        }}
                        onDrop={event => {
                          event.preventDefault();
                          event.stopPropagation();
                          if (draggedFile) moveUpgrade(draggedFile, tier, item.file);
                          setDraggedFile(null);
                          setDropBeforeFile(null);
                          setDropAfterFile(null);
                        }}
                      >
                        <img src={`${ASSET_BASE}/upgrades/${item.file}.png`} alt={`${item.name} — ${tier} tier Axie DOM power-up`} loading="lazy" />
                      </article>
                      {draggedFile && draggedFile !== item.file && dropAfterFile === item.file && (
                        <div
                          className="dom-drop-slot"
                          aria-hidden="true"
                          onDragOver={event => event.preventDefault()}
                          onDrop={event => {
                            event.preventDefault();
                            event.stopPropagation();
                            moveUpgradeAfter(draggedFile, tier, item.file);
                            setDraggedFile(null);
                            setDropBeforeFile(null);
                            setDropAfterFile(null);
                          }}
                        >
                          <span>DROP HERE</span>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </section>
            );
          })}
          {!filtered.length && (
            <div className="dom-empty">
              <img src={`${ASSET_BASE}/buba_idle2.gif`} alt="" />
              <h3>NO POWER-UPS FOUND</h3>
              <p>Try another name, effect, floor, or tier.</p>
              <button type="button" onClick={() => { setQuery(""); setActiveTiers([]); }}>RESET SEARCH</button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default AxieDom;
