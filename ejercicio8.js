function obtenerDigitos(numero) {
    let digitos = numero.toString().split("");
    let arregloDigitos = [];
    
    for (let i = 0; i < digitos.length; i++) {
      arregloDigitos.push(parseInt(digitos[i]));
    }
    
    return arregloDigitos;
  }

  
  let numero = 12345;
let digitos = obtenerDigitos(numero);
console.log(digitos); // imprime [1, 2, 3, 4, 5]
