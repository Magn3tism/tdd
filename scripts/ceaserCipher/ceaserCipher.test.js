import ceaserCipher from "./ceaserCipher";

it("Ceaser cipher lowercase", () => {
  expect(ceaserCipher("hello", 5)).toBe("mjqqt");
  expect(ceaserCipher("zzzz", 5)).toBe("eeee");
  expect(ceaserCipher("yyyy", 5)).toBe("dddd");
  expect(ceaserCipher("uvwxyz", 5)).toBe("zabcde");
});

it("Ceaser cipher uppercase", () => {
  expect(ceaserCipher("HELLO", 5)).toBe("MJQQT");
  expect(ceaserCipher("ZZZZ", 5)).toBe("EEEE");
  expect(ceaserCipher("YYYY", 5)).toBe("DDDD");
  expect(ceaserCipher("UVWXYZ", 5)).toBe("ZABCDE");
});

it("Ceaser cipher mixedcase", () => {
  expect(ceaserCipher("HeLlO", 5)).toBe("MjQqT");
  expect(ceaserCipher("zzZZ", 5)).toBe("eeEE");
  expect(ceaserCipher("yYyy", 5)).toBe("dDdd");
  expect(ceaserCipher("UvwXYz", 5)).toBe("ZabCDe");
});

it("Ceaser cipher number", () => {
  expect(ceaserCipher("HeLlO67", 5)).toBe("MjQqT67");
  expect(ceaserCipher("zz55ZZ", 5)).toBe("ee55EE");
  expect(ceaserCipher("11yYyy", 5)).toBe("11dDdd");
  expect(ceaserCipher("5U6v7w8X9Y0z", 5)).toBe("5Z6a7b8C9D0e");
});

it("Ceaser cipher punctuation", () => {
  expect(ceaserCipher("HeLlO!!", 5)).toBe("MjQqT!!");
  expect(ceaserCipher("zz%$ZZ", 5)).toBe("ee%$EE");
  expect(ceaserCipher("&*yYyy", 5)).toBe("&*dDdd");
  expect(ceaserCipher("!U@v#w$X%Y^z", 5)).toBe("!Z@a#b$C%D^e");
});
