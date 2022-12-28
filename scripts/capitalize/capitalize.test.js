import capitalize from "./capitalize";

it("Capitalize string 1", () => {
  expect(capitalize("hello")).toBe("Hello");
});

it("Capitalize string 2", () => {
  expect(capitalize("electron")).toBe("Electron");
});

it("Capitalize string 2", () => {
  expect(capitalize("#electron")).toBe("#electron");
});
