export default function capitalize(str) {
  if (typeof str !== "string") {
    return "Please enter a string.";
  } else if (str === str.toUpperCase()) {
    return str;
  }

  if (str.charAt(0) !== str.charAt(0).toUpperCase()) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
