import data from "./flowers.json";

export const flowerRecipes = Object.fromEntries(
  data.flowers.map(f => [f.name, f])
);

// Positive grow times make the least-time route strictly decrease toward a
// starting crop. This excludes circular recipes without truncating the route.
const growDays = Object.fromEntries(data.flowers.map(f => [f.name, Infinity]));
for (let pass = 0; pass < data.flowers.length; pass += 1) {
  let changed = false;
  data.flowers.forEach(f => {
    const days =
      f.days +
      Math.min(
        ...f.ingredients.map(i =>
          flowerRecipes[i.name] ? growDays[i.name] : 0
        )
      );
    if (days < growDays[f.name]) {
      growDays[f.name] = days;
      changed = true;
    }
  });
  if (!changed) break;
}

export function buildGrowingRoute(flower) {
  const nodes = [],
    edges = [];
  let leaf = 0,
    maxDepth = 0;
  function visit(item, id, depth) {
    const recipe = flowerRecipes[item.name];
    const node = { ...item, id, depth, recipe };
    nodes.push(node);
    maxDepth = Math.max(maxDepth, depth);
    if (recipe && Number.isFinite(growDays[recipe.name])) {
      const ingredients = recipe.ingredients.filter(
        i =>
          (flowerRecipes[i.name] ? growDays[i.name] : 0) + recipe.days ===
          growDays[recipe.name]
      );
      const children = ingredients.map((ingredient, index) =>
        visit(ingredient, `${id}/${index}`, depth + 1)
      );
      node.x = (children[0].x + children[children.length - 1].x) / 2;
      children.forEach(child =>
        edges.push({ from: child, to: node, alternative: children.length > 1 })
      );
    } else {
      node.x = 100 + leaf++ * 200;
    }
    return node;
  }
  visit(flower, "root", 0);
  const height = Math.max(320, leaf * 200);
  const offset = (height - leaf * 200) / 2;
  nodes.forEach(node => {
    node.y = node.x - 40 + offset;
    node.x = 100 + (maxDepth - node.depth) * 220;
  });
  return {
    nodes,
    edges,
    width: maxDepth * 220 + 200,
    height,
    days: growDays[flower.name]
  };
}
