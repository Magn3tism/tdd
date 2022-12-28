import calculator from "./calculator";

it("check sum", () => {
  expect(calculator("2+3")).toBe(5);
  expect(calculator("99+42")).toBe(141);
});

it("check difference", () => {
  expect(calculator("2-3")).toBe(-1);
  expect(calculator("99-42")).toBe(57);
});

it("check difference", () => {
  expect(calculator("2*3")).toBe(6);
  expect(calculator("99*42")).toBe(4158);
});

it("check difference", () => {
  expect(calculator("3/2")).toBe(1.5);
  expect(calculator("21/7")).toBe(3);
  expect(calculator("21/0")).toBe(Infinity);
});
