function fibonacci(n) {
  if (n < 0) {
    return 'Não é um número válido';
  }
  if (n == 0) {
    return 'Sim, é um número de Fibonacci';
  }
  if (n == 1) {
    return 'Sim, é um número de Fibonacci';
  }
  let target = BigInt(n);
  let current = BigInt(1);
  let previous = BigInt(0);
  while (current < target) {
    let temp = current;
    current = current + previous;
    previous = temp;
    if (current == n) {
      return 'Sim, é um número de Fibonacci';
    }
  }
  return 'Não é um número de Fibonacci';
}

export default fibonacci;
