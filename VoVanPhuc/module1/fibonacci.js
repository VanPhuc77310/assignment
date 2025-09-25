function Fibonacci(n, flag) {
  if (flag === true) {
    if (n <= 1) return n;
    return Fibonacci(n - 1, true) + Fibonacci(n - 2, true);
  }
  return null;
}
