function esNumeroPerfecto(numero) {
    let suma = 0;
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
        suma += i;
      }
    }
    return suma === numero;
  }
  function sumaNumerosPerfectos(numeros) {
    let suma = 0;
    for (let numero of numeros) {
      if (esNumeroPerfecto(numero)) {
        suma += numero;
      }
    }
    return suma;
  }
  const numeros = [6, 7, 8, 9, 10, 11, 12];
  const suma = sumaNumerosPerfectos(numeros);
  console.log(`La suma de los números perfectos en [${numeros}] es ${suma}`);
      