import { buildGrowingRoute, flowerRecipes } from "./lineageData";

test("traces Celestial from starting crops to the final flower", () => {
  const graph = buildGrowingRoute(flowerRecipes["Celestial Frostbloom"]);
  expect(graph.nodes.map(n => n.name)).toEqual(
    expect.arrayContaining([
      "Sunflower",
      "Apple",
      "Yellow Pansy",
      "Yellow Cosmos",
      "White Pansy",
      "Celestial Frostbloom"
    ])
  );
  expect(graph.days).toBe(5);
  const target = graph.nodes.find(n => n.id === "root");
  expect(target.x).toBe(Math.max(...graph.nodes.map(n => n.x)));
  graph.edges.forEach(({ from, to }) => {
    expect(from.x).toBeLessThan(to.x);
    expect(to.recipe.ingredients.some(i => i.name === from.name)).toBe(true);
  });
});

test("every flower has a finite route ending in starting ingredients without cycles", () => {
  Object.values(flowerRecipes).forEach(flower => {
    const graph = buildGrowingRoute(flower);
    expect(Number.isFinite(graph.days)).toBe(true);
    graph.nodes.forEach(node => {
      const incoming = graph.edges.filter(e => e.to.id === node.id);
      if (node.recipe) expect(incoming.length).toBeGreaterThan(0);
      else expect(incoming).toHaveLength(0);
    });
  });
});
