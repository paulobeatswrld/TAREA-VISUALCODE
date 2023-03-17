function factorial(numero) {
    if (numero === 0) {
      return 1;
    } else {
      return numero * factorial(numero - 1);
    }
  }
  
  function factorialesDeArreglo(arreglo) {
    let factoriales = [];
    for (let i = 0; i < arreglo.length; i++) {
      factoriales.push(factorial(arreglo[i]));
    }
    return factoriales;
  }

  
  let numeros = [1, 2, 3, 4, 5];
console.log(factorialesDeArreglo(numeros)); // muestra [1, 2, 6, 24, 120] en la consola
