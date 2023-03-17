const numero = prompt("Ingrese un número:");

const digitos = numero.toString().split("");

for (let i = 0; i < digitos.length; i++) {
  const digito = parseInt(digitos[i]);
  if (digito % 2 === 0) {
    console.log(`El dígito ${digito} es par.`);
  }
}


