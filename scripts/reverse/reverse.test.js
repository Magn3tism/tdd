import reverse from "./reverse";

it("Check reversed 1", () => {
  expect(reverse("hello")).toBe("olleh");
  expect(reverse("hello!")).toBe("!olleh");
});

it("Check reversed 2", () => {
  expect(reverse("tro1en325#2")).toBe("2#523ne1ort");
});
