// ProcessingInstruction.argv

// 1. El primer elemento del ProcessingInstruction.argv, el Array, siempre sera una ruta del sistema de archivos que apunta al Node ejecutable

// 2. El segundo elemento es el nombre del archivo JavaScript que se esta ejecutando

// 3. El tercer elemento es el primer argumento que realmente paso el usuario 

console.log(process.argv)

// para que se imprima en la terminal bash, hay que poner node (el archivo, en este caso ejemplo.js) y se imprime lo que hay, si se pone mas instanceof, por ejemplo: node ejemplo.js hola, se imprime el process.argv y hola abajo, etc

// argumentos de la linea de comando

// lo siguiente encerraria en un array los argumentos de la segunda linea de comando
console.log(process.argv.slice(2))