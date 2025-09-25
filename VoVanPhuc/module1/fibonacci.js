function Fibonacci(n, flag) {
  if (flag === false) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  if (flag === true) {
    if (n <= 1) return n;
    return Fibonacci(n - 1, true) + Fibonacci(n - 2, true);
  }

  return null; 
}
