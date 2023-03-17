function powerOfNumber(numbers) {
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
      const exponent = numbers[i];
      const result = Math.pow(numbers[i], exponent);
      results.push(result);
    }
    return results;
  }
  
  // Ejemplo de uso
  const numbers = [2, 3, 4];
  const results = powerOfNumber(numbers);
  console.log(results); // salida esperada: [4, 27, 256] (ya que 2^2 = 4, 3^3 = 27, y 4^4 = 256)
  