import { checkEven } from "../../checkEven";

test("checkEven function", () => {
  expect(checkEven(2)).toBe(true);
  expect(checkEven(3)).toBe(false);
});
