function sumaDigitos(numero) {
    let suma = 0;
    while (numero) {
      suma += numero % 10;
      numero = Math.floor(numero / 10);
    }
    return suma;
  }

  
  console.log(sumaDigitos(123)); // Output: 6
console.log(sumaDigitos(456)); // Output: 15
console.log(sumaDigitos(789)); // Output: 24
