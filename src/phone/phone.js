export default function phoneTest(tel) {
  const regexp = /[-\s)(]/g;
  if (
    (tel[0] === "+" && tel[1] === "7") ||
    (tel[0] === "+" && tel[1] === "8")
  ) {
    return tel.replace(regexp, "");
  } else {
    return tel.replace("8", "+7").replace(regexp, "");
  }
}
