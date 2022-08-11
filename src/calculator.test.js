import Calculator from "./calculator";

describe("Add", () => {
  test("adds simple numbers", () => {
    expect(Calculator.add(3, 5)).toBe(8);
  });

  test("adds big numbers", () => {
    expect(Calculator.add(61284, 98274)).toBe(159558);
  });

  test("operates with string numbers", () => {
    expect(Calculator.add("3", "5")).toBe(8);
  });

  test("gives an error if inputs are not numeral strings", () => {
    expect(Calculator.add("howdy", "doodly")).toBe(
      "Please enter a valid number."
    );
  });
});

describe("Subtract", () => {
  test("subtracts simple numbers", () => {
    expect(Calculator.subtract(5, 3)).toBe(2);
  });

  test("subtracts big numbers", () => {
    expect(Calculator.subtract(1248092, 82914)).toBe(1165178);
  });

  test("operates with string numbers", () => {
    expect(Calculator.subtract("5", "3")).toBe(2);
  });

  test("can return negative numbers", () => {
    expect(Calculator.subtract("3", "5")).toBe(-2);
  });

  test("gives an error if inputs are not numeral strings", () => {
    expect(Calculator.subtract("howdy", "doodly")).toBe(
      "Please enter a valid number."
    );
  });
});

describe("Divide", () => {
  test("divides simple numbers", () => {
    expect(Calculator.divide(6, 3)).toBe(2);
  });

  test("divides big numbers", () => {
    expect(Calculator.divide(1000000, 500)).toBe(2000);
  });

  test("operates with string numbers", () => {
    expect(Calculator.divide("6", "3")).toBe(2);
  });

  test("can return fixed floating numbers", () => {
    expect(Calculator.divide("4", "3")).toBe(1.33);
  });

  test("gives an error if inputs are not numeral strings", () => {
    expect(Calculator.divide("howdy", "doodly")).toBe(
      "Please enter a valid number."
    );
  });
});

describe("Multiply", () => {
  it("multiplies simple numbers", () => {
    expect(Calculator.multiply(3, 5)).toBe(15);
  });

  test("divides big numbers", () => {
    expect(Calculator.multiply(98765, 43210)).toBe(4267635650);
  });

  test("operates with string numbers", () => {
    expect(Calculator.multiply("6", "3")).toBe(18);
  });

  test("gives an error if inputs are not numeral strings", () => {
    expect(Calculator.multiply("howdy", "doodly")).toBe(
      "Please enter a valid number."
    );
  });
});
