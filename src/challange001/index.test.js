const returnCoinsNumber = require("./index");

describe("Problema da Moeda", () => {
  test("returnCoinsNumber([1,2,5], 5) => 1", () => {
    expect(returnCoinsNumber([1, 2, 5], 5)).toBe(1);
  });

  test("returnCoinsNumber([1,2,5], 5) => 2", () => {
    expect(returnCoinsNumber([1, 2, 3], 5)).toBe(2);
  });

  test("returnCoinsNumber([], 0) => 0", () => {
    expect(returnCoinsNumber([], 0)).toBe(0);
  });

  test("returnCoinsNumber([5], 5) => 1", () => {
    expect(returnCoinsNumber([5], 5)).toBe(1);
  });
});
