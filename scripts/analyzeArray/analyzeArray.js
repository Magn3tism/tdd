export default function analyzeArray(array) {
  const length = array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const sum = array.reduce((a, b) => a + b, 0);

  return { length, min, max, average: sum / length };
}
