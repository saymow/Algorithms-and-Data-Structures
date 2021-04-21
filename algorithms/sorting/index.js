import "colors";
import * as Algorithms from "./algorithms.js";

const algorithms = Object.keys(Algorithms).map((name) => ({
  name,
  algorithm: Algorithms[name],
}));

const genArray = (size) =>
  new Array(size).fill().map(() => Math.round(Math.random() * 1000));

const idealAlgorithm = (arr) => [...arr].sort((a, b) => a - b);

const timeTests = (algorithm) => {
  const largeArray = genArray(1000);
  const mediumArray = genArray(100);
  const shortArray = genArray(10);

  console.time("largeArrayIdeal".bgWhite.black);
  idealAlgorithm(largeArray);
  console.timeEnd("largeArrayIdeal".bgWhite.black);

  console.time("largeArrayAlgorithm".bgGreen.black);
  algorithm(largeArray);
  console.timeEnd("largeArrayAlgorithm".bgGreen.black);

  console.log("\n");

  console.time("mediumArrayIdeal".bgWhite.black);
  idealAlgorithm(mediumArray);
  console.timeEnd("mediumArrayIdeal".bgWhite.black);

  console.time("mediumArrayAlgorithm".bgGreen.black);
  algorithm(mediumArray);
  console.timeEnd("mediumArrayAlgorithm".bgGreen.black);

  console.log("\n");

  console.time("shortArrayIdeal".bgWhite.black);
  idealAlgorithm(shortArray);
  console.timeEnd("shortArrayIdeal".bgWhite.black);

  console.time("shortArrayAlgorithm".bgGreen.black);
  algorithm(shortArray);
  console.timeEnd("shortArrayAlgorithm".bgGreen.black);
};

const effectivenessTests = (algorithm) => {
  const exampleArray = genArray(50);
  let solution = algorithm(exampleArray);

  idealAlgorithm([...exampleArray]).forEach((value, i) => {
    if (solution[i] !== value) throw new Error("Algorithm can't pass the test");
  });
};

function testAlgorithm(algorithm) {
  try {
    effectivenessTests(algorithm);
    timeTests(algorithm);
  } catch (err) {
    console.log(`Error: ${err.message}`.white.bgRed);
  }
}

function runAllTests(algorithms) {
  algorithms.forEach((algo) => {
    console.log(`${algo.name} TESTS:\n`);
    testAlgorithm(algo.algorithm);
  });
}

runAllTests(algorithms);

export { testAlgorithm };
