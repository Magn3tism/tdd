export default function calculator(expression) {
  if (expression.includes("+")) return add(expression.split("+"));
  else if (expression.includes("-")) return difference(expression.split("-"));
  else if (expression.includes("*")) return product(expression.split("*"));
  else if (expression.includes("/")) return divide(expression.split("/"));
}

function add(expression) {
  return Number(expression[0]) + Number(expression[expression.length - 1]);
}

function difference(expression) {
  return Number(expression[0]) - Number(expression[expression.length - 1]);
}

function product(expression) {
  return Number(expression[0]) * Number(expression[expression.length - 1]);
}

function divide(expression) {
  return Number(expression[0]) / Number(expression[expression.length - 1]);
}
