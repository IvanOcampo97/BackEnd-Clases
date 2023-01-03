
ejemplo
// const ejecutar = (func, params) => func(params)

// const saludar = (nombre) => `hola ${nombre}`

// const saludo = ejecutar(saludar, "Brian")


// console.log(saludo)

ejemplo 
// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;
// const multiplicacion = (a, b) => a * b;
// const division = (a, b) => a / b;
// const modulo = (a, b) => a % b;


// const operacion = (valor1, valor2, func) => func(valor1, valor2)





// PROMESA EJEMPLO
function dividir (dividiendo, divisor) {
    return new Promise ((resolve, reject) =>{
        if(divisor == 0) {
            reject('no se puede dividir por cero')
        } else {
            resolve(dividiendo / divisor)
        }
    })
}

dividir(10, 0)
  .then((resultado) => {
    console.log(`resultado: ${resultado}`);
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });
