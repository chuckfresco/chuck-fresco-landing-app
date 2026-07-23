import React from "react";
import { Helmet } from "react-helmet";
import AxieDomNav from "./AxieDomNav";
import "./styles.css";

const ASSET_BASE = "/assets/axie/axie-dom";

const CardReference = ({ file, children }) => (
  <span className="card-reference" tabIndex="0">
    {children}
    <span className="card-reference__preview" role="tooltip">
      <img src={`${ASSET_BASE}/upgrades/${file}.png`} alt={`${children} power up card`} />
    </span>
  </span>
);

const floorGroups = [
  {
    range: "ALL FLOORS",
    label: "Good the whole run",
    description: "You can take these early and still get value from them on the later floors.",
    cards: [["attack_up", "Sharp Blade"], ["retaliation", "Retaliation"], ["berserker", "Berserker"]]
  },
  {
    range: "FLOORS 1–5",
    label: "Set up your run",
    description: "Use the early floors to build up energy and movement before things get harder.",
    cards: [["max_energy_large", "Vigor II"], ["max_energy_small", "Vigor I"], ["momentum", "Momentum"]]
  },
  {
    range: "FLOORS 3–6",
    label: "Clear more rooms",
    description: "These help while you are exploring, but you will probably want something stronger later.",
    cards: [["trap_sight", "Trap Sight"], ["soft_traps", "Soft Traps"], ["vampiric", "Life Steal"]]
  },
  {
    range: "FLOORS 4–8",
    label: "Useful in the middle",
    description: "These are good when the rooms start getting harder and you need more protection or map information.",
    cards: [["thorns", "Thorns"], ["scout", "Scout"]]
  },
  {
    range: "FLOORS 5–6",
    label: "Short term help",
    description: "They can help you get through these floors, but do not depend on them for the rest of the run.",
    cards: [["poison_blade", "Poison Blade"], ["tough_hide", "Tough Hide"], ["spirit_ward", "Spirit Ward"]]
  },
  {
    range: "UP TO FLOOR 10",
    label: "Value on deeper floors",
    description: "These can still be useful later, but getting an attack perk before Floor 7 is more important.",
    cards: [["bone_breaker", "Bone Breaker"], ["treasure_bonus", "Golden Touch"], ["scavenger", "Scavenger"], ["lucky_find", "Lucky Find"]]
  }
];

const Strategy = () => (
  <main className="axie-dom-page dom-strategy-page">
    <Helmet>
      <title>Axie DOM Beginner Strategy Guide | Chuck Fresco</title>
      <meta name="description" content="A practical beginner strategy for reaching higher floors in Axie: Den of Mysteries." />
      <link rel="canonical" href="https://chuckfresco.com/axie-dom/strategy" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Chuck Fresco" />
      <meta property="og:title" content="Axie DOM New Player Strategy Guide" />
      <meta property="og:description" content="Save energy, spend gold wisely, and reach higher floors in Axie: Den of Mysteries." />
      <meta property="og:url" content="https://chuckfresco.com/axie-dom/strategy" />
      <meta property="og:image" content="https://chuckfresco.com/assets/social/previews/axie-dom-strategy.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Axie Den of Mysteries New Player Strategy Guide" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ChuckFresco" />
      <meta name="twitter:title" content="Axie DOM New Player Strategy Guide" />
      <meta name="twitter:description" content="Save energy, spend gold wisely, and reach higher floors in Axie: Den of Mysteries." />
      <meta name="twitter:image" content="https://chuckfresco.com/assets/social/previews/axie-dom-strategy.jpg" />
      <meta name="twitter:image:alt" content="Axie Den of Mysteries New Player Strategy Guide" />
    </Helmet>

    <section
      className="strategy-hero"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(25,12,8,.98), rgba(47,24,14,.83) 58%, rgba(38,17,10,.28)), url(${ASSET_BASE}/dom_scene.gif)` }}
    >
      <div className="strategy-hero__content">
        <span className="dom-kicker">BEGINNER FIELD GUIDE</span>
        <h1>GO DEEPER.<br />SPEND SMARTER.</h1>
        <p>A strategy for new players to save energy and gold while getting the most rewards from each run.</p>
      </div>
      <img className="strategy-hero__logo" src={`${ASSET_BASE}/axie-dom-logo.webp`} alt="Axie Den of Mysteries" />
      <img className="strategy-hero__buba" src={`${ASSET_BASE}/buba_run.gif`} alt="Buba running through the Den of Mysteries" />
    </section>

    <AxieDomNav />

    <div className="strategy-shell">
      <aside className="strategy-note">
        <strong>BEFORE YOU START</strong>
        <p>This community guide helps new players get more consistent runs and move closer to break even payouts. Adjust it for your play style, room layout, and power ups. Thank you to the Axie DOM community for sharing these strategies.</p>
      </aside>

      <section className="strategy-section">
        <div className="strategy-section__heading">
          <span>01</span>
          <div><small>THE RUN PLAN</small><h2>YOUR THREE FLOOR PHASES</h2></div>
        </div>
        <div className="phase-grid">
          <article className="phase-card phase-card--green">
            <span className="phase-card__floors">FLOORS 1–6</span>
            <h3>BUILD YOUR RUN</h3>
            <p>On most runs you can clear every room on these floors. If the exit is very far away or a room will cost too much energy, it is fine to leave.</p>
            <strong>GOAL: Clear what you can and save energy for later.</strong>
          </article>
          <article className="phase-card phase-card--gold">
            <span className="phase-card__floors">START OF FLOOR 7</span>
            <h3>THE ATTACK CHECK</h3>
            <p>Do not start Floor 7 without an attack perk if you can avoid it. <CardReference file="attack_up">Sharp Blade</CardReference> and <CardReference file="merciless">Merciless</CardReference> are two strong damage options. Keep as much energy as possible and use your rerolls if your build still has no damage.</p>
            <strong>RECOMMENDED LIMIT: Stop rerolling at 200 gold.</strong>
          </article>
          <article className="phase-card phase-card--red">
            <span className="phase-card__floors">FLOORS 7+</span>
            <h3>PLAY FOR SURVIVAL</h3>
            <p>This is where enemies start doing real damage. Stay away from black bats when possible, especially if you do not have <CardReference file="attack_up">Sharp Blade</CardReference>. You do not have to fight everything.</p>
            <strong>GOAL: Keep your health and energy for the rooms that matter.</strong>
          </article>
        </div>
      </section>

      <section className="strategy-section">
        <div className="strategy-section__heading">
          <span>02</span>
          <div><small>VISUAL FLOOR MAP</small><h2>POWER UPS BY FLOOR</h2></div>
        </div>
        <p className="floor-map-intro">The floor ranges are my estimate of where each power up helps the most. It does not mean the power up only appears on those floors. This is just a quick way to see if a pick still makes sense for your run.</p>
        <div className="floor-map">
          {floorGroups.map(group => (
            <article className="floor-map__group" key={group.range}>
              <div className="floor-map__info">
                <span>{group.range}</span>
                <h3>{group.label}</h3>
                <p>{group.description}</p>
              </div>
              <div className="floor-map__cards">
                {group.cards.map(([file, name]) => (
                  <figure key={file}>
                    <img src={`${ASSET_BASE}/upgrades/${file}.png`} alt={`${name} power up`} loading="lazy" />
                    <figcaption>{name}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="strategy-section">
        <div className="strategy-section__heading">
          <span>03</span>
          <div><small>CORE HABITS</small><h2>PLAY SMARTER, NOT TOUGHER</h2></div>
        </div>
        <div className="tips-grid">
          <article><b>01</b><div><h3>YOU CAN SKIP MOBS</h3><p>Going around an enemy is often better than taking free damage. A room clear is not worth it if you lose too much health.</p></div></article>
          <article><b>02</b><div><h3>STAY NEAR THE WALLS</h3><p>Walking near a wall makes traps easier to avoid. When a room is only 3 tiles wide, I expect a trap to be there.</p></div></article>
          <article><b>03</b><div><h3>SAVE DEFENSE FOR REAL THREATS</h3><p>Do not use <CardReference file="shield">Barrier</CardReference> or <CardReference file="thorns">Thorns</CardReference> charges on slimes. Save them for enemies that are harder to dodge or skip.</p></div></article>
          <article><b>04</b><div><h3>RARITY IS NOT EVERYTHING</h3><p>Do not pick something only because it is Epic. A Common or Rare power up can be much better for the build you already have.</p></div></article>
          <article><b>05</b><div><h3>USE THREE FLOOR POWER UPS</h3><p>Once a three floor power up expires, it leaves your pool. That can make it easier to find the attack perks you need later.</p></div></article>
          <article><b>06</b><div><h3>DO NOT GRAB EVERY ENERGY DROP</h3><p><CardReference file="berserker">Berserker</CardReference> is very strong at low energy. Leave some drops on the ground so you can pick them up when you actually need them.</p></div></article>
        </div>
      </section>

      <section className="strategy-section strategy-build">
        <div className="strategy-section__heading">
          <span>04</span>
          <div><small>HIGH FLOOR TARGET</small><h2>THE DREAM BUILD</h2></div>
        </div>
        <p className="strategy-build__intro">This is one of the most recommended builds across the Axie DOM community for reaching higher floors. It gives you more damage, reflected damage, and a better chance of keeping your health throughout the run.</p>
        <div className="strategy-build__cards">
          <div><img src={`${ASSET_BASE}/upgrades/attack_up.png`} alt="Sharp Blade power-up" /><span>1</span></div>
          <em>+</em>
          <div><img src={`${ASSET_BASE}/upgrades/retaliation.png`} alt="Retaliation power-up" /><span>2</span></div>
          <em>+</em>
          <div><img src={`${ASSET_BASE}/upgrades/dodge_roll.png`} alt="Dodge Roll power-up" /><span>3</span></div>
        </div>
        <div className="strategy-build__result"><small>BUILD RESULT</small><strong><CardReference file="attack_up">SHARP BLADE</CardReference> + <CardReference file="retaliation">RETALIATION</CardReference> + <CardReference file="dodge_roll">DODGE ROLL</CardReference></strong><span>≈ 145 HP</span></div>
      </section>
    </div>
  </main>
);

export default Strategy;
