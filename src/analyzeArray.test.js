import analyzeArray from "./analyzeArray";

describe("Analyze Array", () => {
  test("returns the average, the minimum, the maximum, and length of an array", () => {
    expect(analyzeArray([2, 4, 6, 8])).toEqual({
      min: 2,
      max: 8,
      avg: 5,
      length: 4,
    });
  });
});
