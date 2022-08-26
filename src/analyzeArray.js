export default function analyzeArray(arr) {
  function findMin(arr) {
    return arr.sort((a, b) => a - b).at(0);
  }

  function findMax(arr) {
    return arr.sort((a, b) => a - b).at(-1);
  }

  function findAverage(arr) {
    return arr.reduce((prev, current) => prev + current, 0) / arr.length;
  }

  return {
    min: findMin(arr),
    max: findMax(arr),
    avg: findAverage(arr),
    length: arr.length,
  };
}
