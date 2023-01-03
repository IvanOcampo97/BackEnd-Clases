const socket = io.connect();

function obtenerPlantillaPrductos(productos){
    // return htm completo de la plantilla con los productos
    return fetch('plantillas/tabla-productos.hbs')
    .then(response => response.text())
    .then(plantilla => {
        const plantillaHBS = Handlebars.compile(plantilla)
        const htmlCompleto = plantillaHBS(productos)
        return htmlCompleto
    })
}

socket.on('productos', async productos => {
    const html = await obtenerPlantillaPrductos(productos)
    document.getElementById('products').innerHTML = html
})








// const button = document.getElementById('sumbit')

// button.addEventListener('click', () => {
//     const message = {
//         name: document.getElementById("name").value,
//         message: document.getElementById("message").value,
//     }
//     // console.log(message)
//     socket.emit('new-message', message)
// });



// socket.on('new-chat-message', messages => {

//     const html = messages.map(message =>{
//        return (`<div><strong>${message.name}</strong>:<em>${message.message}</em></div>`) 
//     }).join(' ');
//     // el .join agrega en este caso el espacio entre palabras
//     document.getElementById('chat').innerHTML = html
// });