import caesarCipher from "./caesarCipher";

describe("Caesar Cipher", () => {
  test("correctly shifts a whole word by 5 shifts", () => {
    expect(caesarCipher("berkay", 5)).toBe("gjwpfd");
  });

  test("correctly shifts a whole word by 13 shifts (ROT-13)", () => {
    expect(caesarCipher("berkay", 13)).toBe("orexnl");
  });

  test("correctly shifts a sentence by 5 shifts", () => {
    expect(caesarCipher("cats the are best animals in the world", 5)).toBe(
      "hfyx ymj fwj gjxy fsnrfqx ns ymj btwqi"
    );
  });
});
