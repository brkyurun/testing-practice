export default class Calculator {
  static add(x, y) {
    if (isNaN(x) || isNaN(y)) return "Please enter a valid number.";

    if (typeof x !== "number" || typeof y !== "number") {
      x = Number.parseInt(x);
      y = Number.parseInt(y);
    }

    return x + y;
  }

  static subtract(x, y) {
    if (isNaN(x) || isNaN(y)) return "Please enter a valid number.";

    if (typeof x !== "number" || typeof y !== "number") {
      x = Number.parseInt(x);
      y = Number.parseInt(y);
    }

    return x - y;
  }

  static divide(x, y) {
    if (isNaN(x) || isNaN(y)) return "Please enter a valid number.";

    if (typeof x !== "number" || typeof y !== "number") {
      x = Number.parseInt(x);
      y = Number.parseInt(y);
    }

    return Number.parseFloat((x / y).toFixed(2));
  }

  static multiply(x, y) {
    if (isNaN(x) || isNaN(y)) return "Please enter a valid number.";

    if (typeof x !== "number" || typeof y !== "number") {
      x = Number.parseInt(x);
      y = Number.parseInt(y);
    }

    return Number.parseFloat((x * y).toFixed(2));
  }
}
