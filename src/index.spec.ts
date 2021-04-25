import { hello } from ".";

test("hello", () => {
  expect(hello("foo")).toEqual("Hello foo");
});