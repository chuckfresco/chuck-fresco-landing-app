import SunflowerPageHeader from "../../components/SunflowerPageHeader";
import React, { useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "./flowers.json";
import FlowerLineage from "./FlowerLineage";
import "./flowers.css";

const flowerNames = new Set(data.flowers.map(f => f.name));
const flowerByName = Object.fromEntries(data.flowers.map(f => [f.name, f]));
const slug = name => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const Icon = ({ src, large = false }) => (
  <img
    className={`fl-icon${large ? " fl-icon-large" : ""}`}
    src={src}
    alt=""
    loading="lazy"
  />
);

const SeasonIcon = ({ season }) => (
  <span className="fl-season-label">
    <img
      className="fl-season-icon"
      src={`/assets/sunflower-land/flowers/season-${season.toLowerCase()}.webp`}
      alt=""
    />
    <span>{season}</span>
  </span>
);

export default function SunflowerLandFlowers() {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const [lineageFlower, setLineageFlower] = useState(null);
  const [seed, setSeed] = useState("All seeds");
  const search = useRef(null);
  const [suggesting, setSuggesting] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const tokens = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  const matchingBumpkins = tokens.length
    ? data.gifts.filter(g =>
        tokens.every(t => g.name.toLowerCase().includes(t))
      )
    : [];
  const exactBumpkin = matchingBumpkins.find(
    g => g.name.toLowerCase() === query.trim().toLowerCase()
  );
  const visibleGifts = exactBumpkin
    ? [exactBumpkin]
    : matchingBumpkins.length
    ? matchingBumpkins
    : data.gifts;
  const suggestions = tokens.length
    ? [
        ...data.flowers
          .filter(f => tokens.every(t => f.name.toLowerCase().includes(t)))
          .map(f => ({ ...f, kind: "Flower" })),
        ...matchingBumpkins.map(g => ({ ...g, kind: "Bumpkin" }))
      ]
    : [];
  const suggestionsOpen = suggesting && suggestions.length > 0;
  const selectSuggestion = name => {
    setSeed("All seeds");
    setQuery(name);
    setSuggesting(false);
    setActiveSuggestion(-1);
  };
  const handleSearchKey = event => {
    if (event.key === "Escape") {
      setSuggesting(false);
      setActiveSuggestion(-1);
    } else if (
      (event.key === "ArrowDown" || event.key === "ArrowUp") &&
      suggestions.length
    ) {
      event.preventDefault();
      setSuggesting(true);
      const next =
        event.key === "ArrowDown"
          ? (activeSuggestion + 1) % suggestions.length
          : activeSuggestion <= 0
          ? suggestions.length - 1
          : activeSuggestion - 1;
      setActiveSuggestion(next);
      window.requestAnimationFrame(() =>
        document
          .getElementById(`flower-option-${next}`)
          ?.scrollIntoView({ block: "nearest" })
      );
    } else if (event.key === "Enter" && suggestionsOpen) {
      event.preventDefault();
      selectSuggestion(suggestions[Math.max(0, activeSuggestion)].name);
    }
  };
  const exactFlower = data.flowers.find(
    f => f.name.toLowerCase() === query.trim().toLowerCase()
  );
  const matches = flower => {
    if (exactBumpkin)
      return flower.favorites.some(f => f.bumpkin === exactBumpkin.name);
    const text = [
      flower.name,
      flower.seed,
      flower.season,
      ...flower.ingredients.map(i => i.name),
      ...flower.favorites.map(f => f.bumpkin)
    ]
      .join(" ")
      .toLowerCase();
    // A complete flower name targets its own card; broader searches include ingredients and Bumpkins.
    return exactFlower
      ? flower.name === exactFlower.name
      : tokens.every(t => text.includes(t));
  };
  const visible = data.flowers.filter(
    f => (seed === "All seeds" || f.seed === seed) && matches(f)
  );
  const setQuery = value => {
    const params = new URLSearchParams(location.search);
    if (value) params.set("q", value);
    else params.delete("q");
    history.replace({ pathname: location.pathname, search: params.toString() });
  };
  const showFlower = (event, name) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    event.preventDefault();
    setSeed("All seeds");
    setQuery(name);
    setSuggesting(false);
    search.current.focus({ preventScroll: true });
    search.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const flowerLink = (name, label = name) => (
    <a
      href={`/sfl/flowers?q=${encodeURIComponent(name)}`}
      onClick={e => showFlower(e, name)}
    >
      {label}
    </a>
  );
  const reset = () => {
    setSeed("All seeds");
    setQuery("");
    setSuggesting(false);
    setActiveSuggestion(-1);
  };

  return (
    <div className="fl-page">
      <Helmet>
        <title>Sunflower Land Flowers & Gifting | Chuck Fresco</title>
        <meta
          name="description"
          content="Search all 53 Sunflower Land flowers by seed, ingredient, season, or favorite Bumpkin. Explore growing recipes and gifting rewards."
        />
      </Helmet>
      <div className="fl-shared-header">
        <SunflowerPageHeader
          title="Sunflower Land Flowers"
          description="Find flower seeds, growing recipes, favorite Bumpkins, and gifting rewards."
          active="flowers"
        />
      </div>
      <main className="fl-shell">
        <section
          className="fl-panel fl-finder"
          aria-labelledby="flower-search-heading"
        >
          <div className="fl-section-heading">
            <div>
              <p className="fl-eyebrow">SEEDS & BLOOMS</p>
              <h2 id="flower-search-heading">Find a flower</h2>
            </div>
            <span className="fl-tag">53 flowers · 7 seeds</span>
          </div>
          <label htmlFor="flower-search">
            Search flowers, ingredients, seasons, or Bumpkins
          </label>
          <div className="fl-search-row">
            <div className="fl-autocomplete">
              <input
                ref={search}
                id="flower-search"
                type="search"
                value={query}
                role="combobox"
                autoComplete="off"
                aria-autocomplete="list"
                aria-expanded={suggestionsOpen}
                aria-controls={
                  suggestionsOpen ? "flower-suggestions" : undefined
                }
                aria-activedescendant={
                  suggestionsOpen && activeSuggestion >= 0
                    ? `flower-option-${activeSuggestion}`
                    : undefined
                }
                onChange={e => {
                  setQuery(e.target.value);
                  setSuggesting(true);
                  setActiveSuggestion(-1);
                }}
                onBlur={() => {
                  setSuggesting(false);
                  setActiveSuggestion(-1);
                }}
                onKeyDown={handleSearchKey}
                placeholder="Try Celestial Frostbloom, Onion. or Tywin..."
              />
              {suggestionsOpen && (
                <ul
                  id="flower-suggestions"
                  className="fl-suggestions"
                  role="listbox"
                  aria-label="Flower and Bumpkin suggestions"
                >
                  {suggestions.map((flower, index) => (
                    <li
                      key={flower.name}
                      id={`flower-option-${index}`}
                      role="option"
                      aria-selected={index === activeSuggestion}
                      onMouseDown={event => event.preventDefault()}
                      onClick={() => selectSuggestion(flower.name)}
                    >
                      <Icon src={flower.image} />
                      <span>{flower.name}</span>
                      <small className="fl-suggestion-kind">
                        {flower.kind}
                      </small>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              className="fl-search-clear"
              onClick={reset}
              disabled={!query && seed === "All seeds"}
            >
              Clear
            </button>
          </div>
          <div className="fl-filters">
            <label htmlFor="flower-seed">Seed</label>
            <select
              id="flower-seed"
              value={seed}
              onChange={e => setSeed(e.target.value)}
            >
              <option value="All seeds">All seeds</option>
              <optgroup label="All-season seeds">
                {data.categories
                  .filter(c => c.season === "All seasons")
                  .map(c => (
                    <option key={c.name} value={c.name}>
                      {c.name} · {c.days}d
                    </option>
                  ))}
              </optgroup>
              <optgroup label="Seasonal seeds">
                {data.categories
                  .filter(c => c.season !== "All seasons")
                  .map(c => (
                    <option key={c.name} value={c.name}>
                      {c.name} · {c.season} · {c.days}d
                    </option>
                  ))}
              </optgroup>
            </select>
          </div>
        </section>
        {!visible.length && (
          <div className="fl-panel fl-empty">
            <h2>No flowers found</h2>
            <p>
              Try another flower, ingredient, or Bumpkin, or clear the seed
              filter.
            </p>
            <button className="fl-button" onClick={reset}>
              Show all flowers
            </button>
          </div>
        )}
        {data.categories.map(category => {
          const flowers = visible.filter(f => f.seed === category.name);
          if (!flowers.length) return null;
          return (
            <section
              className="fl-category"
              key={category.name}
              aria-labelledby={slug(category.name)}
            >
              <div className="fl-category-heading">
                <Icon src={category.image} large />
                <div>
                  <h2 id={slug(category.name)}>{category.name}</h2>
                  <p>
                    {category.days} {category.days === 1 ? "day" : "days"} to
                    grow ·{" "}
                    {category.season === "All seasons" ? (
                      "All seasons"
                    ) : (
                      <SeasonIcon season={category.season} />
                    )}
                  </p>
                </div>
                <span>
                  {flowers.length} {flowers.length === 1 ? "flower" : "flowers"}
                </span>
              </div>
              <div className="fl-grid">
                {flowers.map(f => (
                  <article className="fl-card" key={f.name}>
                    <header>
                      <Icon src={f.image} large />
                      <div>
                        <h3>{f.name}</h3>
                        <div className="fl-card-meta">
                          <span>{f.points} base points</span>
                          {f.season !== "All seasons" && (
                            <small>
                              <SeasonIcon season={f.season} /> · {f.days}d
                            </small>
                          )}
                        </div>
                      </div>
                      {f.ingredients.some(i => flowerNames.has(i.name)) && (
                        <button
                          className="fl-lineage-icon"
                          title={`View growing path for ${f.name}`}
                          onClick={() => setLineageFlower(f)}
                          aria-label={`View lineage for ${f.name}`}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <path d="M12 7v5M5 17v-5h14v5" />
                            <rect x="9" y="1" width="6" height="6" />
                            <rect x="2" y="17" width="6" height="6" />
                            <rect x="16" y="17" width="6" height="6" />
                          </svg>
                        </button>
                      )}
                    </header>
                    <div className="fl-card-body">
                      <div className="fl-seed">
                        <Icon src={category.image} />
                        <strong>{f.seed}</strong>
                      </div>
                      <p className="fl-hint">Plus one of these ingredients:</p>
                      <ul className="fl-ingredients">
                        {f.ingredients.map(i => (
                          <li key={i.name}>
                            <Icon src={i.image} />
                            {flowerNames.has(i.name) ? (
                              flowerLink(
                                i.name,
                                `(${flowerByName[i.name].days}d) ${i.name}`
                              )
                            ) : (
                              <span>{i.name}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <details className="fl-favorites">
                      <summary>
                        Favorite of {f.favorites.length}{" "}
                        {f.favorites.length === 1 ? "Bumpkin" : "Bumpkins"}
                      </summary>
                      {f.favorites.length ? (
                        f.favorites.map(b => (
                          <div key={b.bumpkin}>
                            <a href={`#gift-${slug(b.bumpkin)}`}>{b.bumpkin}</a>
                            <span>
                              <b>+{b.bonus}</b> bonus · <b>{b.total}</b> total
                            </span>
                          </div>
                        ))
                      ) : (
                        <p>
                          No favorite bonus listed. Base points still apply.
                        </p>
                      )}
                    </details>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
        <section
          id="gifting"
          className="fl-gifting"
          aria-labelledby="gifting-heading"
        >
          <div className="fl-section-heading">
            <div>
              <p className="fl-eyebrow">A LITTLE FLOWER GOES A LONG WAY</p>
              <h2 id="gifting-heading">Gifting & Bumpkin rewards</h2>
              <p>
                Base points + favorite bonus = total friendship points. Click
                any favorite flower to find its growing recipe.
              </p>
            </div>
          </div>
          <div className="fl-gift-grid">
            {visibleGifts.map(g => (
              <article
                className="fl-card fl-gift"
                id={`gift-${slug(g.name)}`}
                key={g.name}
              >
                <header>
                  <Icon src={g.image} large />
                  <h3>{g.name}</h3>
                </header>
                <div className="fl-card-body">
                  <h4>Favorite flowers</h4>
                  <ul className="fl-gift-flowers">
                    {g.favorites.map(f => (
                      <li key={f.name}>
                        <Icon src={flowerByName[f.name].image} />
                        {flowerLink(f.name)}
                        <span
                          title={`${f.bonus} bonus points, ${f.total} total points`}
                        >
                          +{f.bonus} <small>({f.total})</small>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <details>
                    <summary>View gifting rewards</summary>
                    <table>
                      <caption>Friendship milestones</caption>
                      <thead>
                        <tr>
                          <th>Points</th>
                          <th>Reward</th>
                        </tr>
                      </thead>
                      <tbody>
                        {g.rewards.map((r, i) => (
                          <tr key={i}>
                            {r.length === 2 ? (
                              <>
                                <th scope="row">{r[0]}</th>
                                <td>{r[1]}</td>
                              </>
                            ) : (
                              <td colSpan="2">{r[0]}</td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <FlowerLineage
        flower={lineageFlower}
        onClose={() => setLineageFlower(null)}
        onSelect={name => {
          selectSuggestion(name);
          setLineageFlower(null);
          window.requestAnimationFrame(() =>
            search.current.scrollIntoView({
              behavior: "smooth",
              block: "center"
            })
          );
        }}
      />
    </div>
  );
}
