import { readFile, writeFile } from "fs";

const genRandomInt = (min, max) => {
  return Math.max(Math.round(Math.random() * max), min);
};

const getUpdatedAdjacentNodes = (mainNode, adjacentNodeListA, adjacentNodeListB) => {
  return [...adjacentNodeListA, ...adjacentNodeListB].filter((_node) => !mainNode.includes(_node));
};

const merge = (input, aNode, bNode) => {
  if (typeof aNode.node === "number") {
    if (Array.isArray(bNode.node)) {
      aNode.node = [...bNode.node, aNode.node];
    } else {
      aNode.node = [aNode.node, bNode.node];
    }
  } else {
    if (Array.isArray(bNode.node)) {
      aNode.node = aNode.node.concat(bNode.node);
    } else {
      aNode.node.push(bNode.node);
    }
  }

  aNode.adjacentNodes = getUpdatedAdjacentNodes(aNode.node, aNode.adjacentNodes, bNode.adjacentNodes);
  input.splice(
    input.findIndex((node) => node === bNode),
    1
  );
};

const getRandomAdjacentNode = (input, aNode) => {
  const aNodeAdjacentRandomNode = aNode.adjacentNodes[genRandomInt(0, aNode.adjacentNodes.length - 1)];
  const bNode = input.find((_bNode) => {
    if (Array.isArray(_bNode.node)) {
      return _bNode.node.includes(aNodeAdjacentRandomNode);
    }
    return _bNode.node === aNodeAdjacentRandomNode;
  });

  return bNode;
};

const kargerMinCut = (input) => {
  while (input.length !== 2) {
    const aNode = input[genRandomInt(0, input.length - 1)];
    const bNode = getRandomAdjacentNode(input, aNode);

    merge(input, aNode, bNode);
  }

  return input[0].adjacentNodes.length;
};

readFile("./kargerMinCut.txt", "utf-8", (err, file) => {
  if (err) {
    throw new Error("Couldn't read file: ", err);
  }

  const data = file.split("\n").map((row) => {
    const entries = row
      .split("\t")
      .filter((valid) => valid)
      .map((strInt) => parseInt(strInt));

    return { node: entries[0], adjacentNodes: entries.slice(1) };
  });

  let bestResult = 999;

  for (let i = 0; i < 100; i++) {
    const result = kargerMinCut(JSON.parse(JSON.stringify(data)));
    bestResult = Math.min(result, bestResult);
  }

  console.log(bestResult);
});
