import capitalize from "./capitalize";

test("capitalizes first letter", () => {
  expect(capitalize("jason")).toBe("Jason");
});

test("fully capitalized words stay the same", () => {
  expect(capitalize("JSON")).toBe("JSON");
});

test("only capitalizes the first letter of randomly capitalized words", () => {
  expect(capitalize("hEhEE")).toBe("HEhEE");
});

test("capitalizes the first letter of the first word in a sentence", () => {
  expect(capitalize("my cat is really cute")).toBe("My cat is really cute");
});
