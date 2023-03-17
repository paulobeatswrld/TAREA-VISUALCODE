function obtenerSumaDivisores(numero) {
    // Validar que el número sea mayor a cero
    if (numero <= 0) {
      console.log("El número debe ser mayor a cero");
      return 0;
    }
  
    // Inicializar una variable para almacenar la suma de los divisores
    let suma = 0;
  
    // Iterar sobre los valores del 1 al número para buscar divisores
    for (let i = 1; i <= numero; i++) {
      // Si el número es divisible por i, agregar i a la suma
      if (numero % i === 0) {
        suma += i;
      }
    }
  
    // Retornar la suma de los divisores
    return suma;
  }

  
  