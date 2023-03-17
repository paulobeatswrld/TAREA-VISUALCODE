function generarTablaMultiplicar(base) {
    // Validar que la base esté en el rango de 1 a 12
    if (base < 1 || base > 12) {
      console.log("La base debe estar en el rango de 1 a 12");
      return;
    }
  
    // Crear una cadena de texto para almacenar la tabla de multiplicar
    let tabla = "";
  
    // Iterar sobre los valores del 1 al 12 para generar la tabla de multiplicar
    for (let i = 1; i <= 12; i++) {
      // Calcular el resultado de la multiplicación
      let resultado = base * i;
  
      // Agregar una nueva línea a la cadena de texto con el resultado de la multiplicación
      tabla += `${base} x ${i} = ${resultado}\n`;
    }
  
    // Imprimir la tabla de multiplicar en la consola
    console.log(tabla);
  }

  generarTablaMultiplicar(5);
