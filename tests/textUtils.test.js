const {
  capitalise,
  wordCount,
  reverse
} = require("../src/textUtils.cjs");

describe("textUtils – capitalise()", () => {
  test("capitalises the first letter of a lowercase word", () => {
    expect(capitalise("hello")).toBe("Hello");
  });

  test("does not change an already capitalised word", () => {
    expect(capitalise("Hello")).toBe("Hello");
  });

  test("returns empty string when input is empty", () => {
    expect(capitalise("")).toBe("");
  });

  test("returns empty string when input is null", () => {
    expect(capitalise(null)).toBe("");
  });

  test("capitalises only the first character, not the whole string", () => {
    expect(capitalise("hELLO")).toBe("HELLO");
  });
});

describe("textUtils – wordCount()", () => {
  test("counts words separated by single spaces", () => {
    expect(wordCount("hello world")).toBe(2);
  });

  test("counts multiple spaces as a single separator", () => {
    expect(wordCount("hello    world")).toBe(2);
  });

  test("counts words across new lines", () => {
    expect(wordCount("hello\nworld")).toBe(2);
  });

  test("returns 1 for a single word", () => {
    expect(wordCount("hello")).toBe(1);
  });

  test("returns 0 for empty string", () => {
    expect(wordCount("")).toBe(0);
  });

  test("returns 0 for null input", () => {
    expect(wordCount(null)).toBe(0);
  });

  test("ignores leading and trailing whitespace", () => {
    expect(wordCount("   hello world   ")).toBe(2);
  });
});

describe("textUtils – reverse()", () => {
  test("reverses a simple string", () => {
    expect(reverse("abc")).toBe("cba");
  });

  test("reverses a sentence with spaces", () => {
    expect(reverse("hello world")).toBe("dlrow olleh");
  });

  test("returns empty string for empty input", () => {
    expect(reverse("")).toBe("");
  });

  test("correctly reverses unicode characters", () => {
    expect(reverse("åßç")).toBe("çßå");
  });
});
``
