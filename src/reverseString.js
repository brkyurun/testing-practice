export default function reverseString(str) {
  if (typeof str !== "string") return "Please enter a string.";

  let stringAsArray = Array.from(str);
  return stringAsArray.reverse().join("");
}
