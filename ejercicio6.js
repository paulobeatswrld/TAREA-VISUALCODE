function obtenerDivisores(numero) {
    // Validar que el número sea mayor a cero
    if (numero <= 0) {
      console.log("El número debe ser mayor a cero");
      return [];
    }
  
    // Crear un arreglo vacío para almacenar los divisores
    let divisores = [];
  
    // Iterar sobre los valores del 1 al número para buscar divisores
    for (let i = 1; i <= numero; i++) {
      // Si el número es divisible por i, agregar i al arreglo de divisores
      if (numero % i === 0) {
        divisores.push(i);
      }
    }
  
    // Retornar el arreglo de divisores
    return divisores;
  }

  
  let divisores = obtenerDivisores(24);
console.log(divisores);

