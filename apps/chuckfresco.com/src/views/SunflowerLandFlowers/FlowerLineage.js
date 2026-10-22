import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import data from "./flowers.json";
import { buildGrowingRoute, flowerRecipes as flowers } from "./lineageData";

const seedImages = Object.fromEntries(
  data.categories.map(seed => [seed.name, seed.image])
);

function DependencyTree({ flower, onSelect }) {
  const [zoom, setZoom] = useState(1);
  const viewport = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(1000);
  useEffect(() => {
    let frame;
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => setViewportWidth(width));
    });
    observer.observe(viewport.current);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);
  const [selected, setSelected] = useState(flower);
  const graph = useMemo(() => buildGrowingRoute(flower), [flower]);
  const scale = Math.max(0.85, Math.min(1, viewportWidth / graph.width)) * zoom;
  return (
    <>
      <div className="fl-graph-toolbar">
        <div>
          <button
            onClick={() => setZoom(z => Math.max(0.5, z - 0.25))}
            disabled={zoom <= 0.5}
            aria-label="Zoom out"
          >
            −
          </button>
          <span>{`${Math.round(zoom * 100)}%`}</span>
          <button
            onClick={() => setZoom(z => Math.min(2, z + 0.25))}
            disabled={zoom >= 2}
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            onClick={() => {
              setZoom(1);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div
        ref={viewport}
        className="fl-graph-scroll"
        tabIndex={0}
        aria-label="Scrollable flower dependency tree"
      >
        <svg
          width={graph.width * scale}
          height={graph.height * scale}
          viewBox={`0 0 ${graph.width} ${graph.height}`}
          role="group"
          aria-label={`${flower.name} ingredient dependency tree`}
        >
          <defs>
            <marker
              id="flower-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#926d50" />
            </marker>
          </defs>
          {graph.edges.map(({ from, to, alternative }) => (
            <g key={`${from.id}-${to.id}`}>
              <path
                d={`M ${from.x + 36} ${from.y + 26} C ${(from.x + to.x) /
                  2} ${from.y + 26}, ${(from.x + to.x) / 2} ${to.y +
                  26}, ${to.x - 36} ${to.y + 26}`}
                fill="none"
                stroke="#926d50"
                strokeWidth="2"
                markerEnd="url(#flower-arrow)"
              />
              {alternative && (
                <text
                  x={(from.x + to.x) / 2}
                  y={(from.y + to.y) / 2 + 16}
                  textAnchor="middle"
                  fill="#5b3d3f"
                  fontSize="11"
                >
                  OR
                </text>
              )}
            </g>
          ))}
          {graph.nodes.map(node => (
            <foreignObject
              key={node.id}
              x={node.x - 100}
              y={node.y - 6}
              width="200"
              height="125"
            >
              <button
                className={`fl-graph-node${
                  selected.name === node.name ? " fl-graph-selected" : ""
                }`}
                onClick={() => setSelected(node.recipe || node)}
                aria-label={`${node.name}, ${
                  node.recipe ? "flower recipe" : "starting ingredient"
                }`}
              >
                <span className="fl-graph-circle">
                  <img src={node.image} alt="" />
                </span>
                <strong>{node.name}</strong>
                <small>
                  {node.recipe ? (
                    <>
                      <span>{node.recipe.days}d ·</span>
                      <img
                        className="fl-graph-seed-icon"
                        src={seedImages[node.recipe.seed]}
                        alt=""
                      />
                      <span>{node.recipe.seed}</span>
                    </>
                  ) : (
                    "Starting ingredient"
                  )}
                </small>
              </button>
            </foreignObject>
          ))}
        </svg>
      </div>
      <div className="fl-graph-selection">
        <img src={selected.image} alt="" />
        <span>
          <strong>{selected.name}</strong>
          <small>
            {flowers[selected.name]
              ? `${flowers[selected.name].seed} · ${
                  flowers[selected.name].days
                } days · ${flowers[selected.name].season}`
              : "Base ingredient"}
          </small>
        </span>
        {flowers[selected.name] && (
          <button onClick={() => onSelect(selected.name)}>
            View flower card
          </button>
        )}
      </div>
    </>
  );
}

export default function FlowerLineage({ flower, onClose, onSelect }) {
  return (
    <Dialog
      open={Boolean(flower)}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      aria-labelledby="flower-lineage-title"
      PaperProps={{ className: "fl-lineage fl-lineage-graph" }}
    >
      <DialogTitle id="flower-lineage-title" className="fl-lineage-title">
        {flower ? `${flower.name} growing path` : "Flower dependency tree"}
        <IconButton
          className="fl-lineage-close"
          onClick={onClose}
          aria-label="Close chart"
          autoFocus
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {flower && (
          <DependencyTree
            key={flower.name}
            flower={flower}
            onSelect={onSelect}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
