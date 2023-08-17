import phoneTest from "../phone/phone";

test("test phone", () => {
  const number = "8 (927) 000-00-00";
  const number2 = "+7 960 000 00 00";
  const number3 = "+86 000 000 0000";
  const func = phoneTest(number);
  const func2 = phoneTest(number2);
  const func3 = phoneTest(number3);
  const result = "+79270000000";
  const result2 = "+79600000000";
  const result3 = "+860000000000";

  expect(func).toEqual(result);
  expect(func2).toEqual(result2);
  expect(func3).toEqual(result3);
});
