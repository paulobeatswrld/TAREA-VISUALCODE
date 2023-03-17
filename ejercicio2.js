function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function getPrimeNumbers(numbers) {
    const primeNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (isPrime(numbers[i])) {
        primeNumbers.push(numbers[i]);
      }
    }
    return primeNumbers;
  }
  
  // Ejemplo de uso
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primes = getPrimeNumbers(numbers);
  console.log(primes); // salida esperada: [2, 3, 5, 7]