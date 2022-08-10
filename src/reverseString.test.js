import reverseString from "./reverseString";

test("returns a message if input is not text", () => {
  expect(reverseString(42)).toBe("Please enter a string.");
});

test("reverses the given string", () => {
  expect(reverseString("Berkay")).toBe("yakreB");
});

test("reverses a sentence", () => {
  expect(reverseString("Albany is bad")).toBe("dab si ynablA");
});
