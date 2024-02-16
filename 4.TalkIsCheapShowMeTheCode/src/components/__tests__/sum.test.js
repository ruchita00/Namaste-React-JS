import { sum } from "../sum";

test("Sum function should calculate thesum of two numbers", () => {
  const result = sum(3, 4);

  //assertion
  expect(result).toBe(7);
});
