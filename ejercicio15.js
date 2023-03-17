function numerosEnRango(inicio, fin) {
    let numeros = [];
    for (let i = inicio; i < fin; i++) {
      numeros.push(i);
    }
    return numeros;
  }

  
  console.log(numerosEnRango(1, 6)); // muestra [1, 2, 3, 4, 5] en la consola

  