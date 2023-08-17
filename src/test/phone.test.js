import phoneTest from "../phone/phone";

test("test phone", () => {
  const number = "8 (927) 000-00-00";
  const func = phoneTest(number);
  const result = "+79270000000";

  expect(func).toEqual(result);
});

test("test phone", () => {
  const number = "+86 000 000 0000";
  const func = phoneTest(number);
  const result = "+860000000000";

  expect(func).toEqual(result);
});

test("test phone", () => {
  const number = "+7 960 000 00 00";
  const func = phoneTest(number);
  const result = "+79600000000";

  expect(func).toEqual(result);
});
