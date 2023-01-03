// pasps para socket
// npm init -y
// npm install --save-dev nodemon
// npm install express socket.io

const express = require("express")
const { Server: HttpServer } = require("http")
const { Server: IOServer } = require("socket.io")

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static("public"))

const productos = [{
    name:"Shampoo",
    price:"$23",
    imagen:""
}]

io.on("connection", socket => {
    console.log("Nuevo cliente conectado")

    socket.emit("productos", productos)

    // // recibe el mensaje
    //     socket.on("new-message", message => {
    //     // console.log(message)

    //     // lo agrega a la memoria
    //     messages.push(message)

    //     console.log(messages)
    //     // evia el mensaje a lños demas sockets conectados
    //     io.sockets.emit("new-chat-message", messages )
    // })
})


const connectedServer = httpServer.listen(8080, ()=> {
    console.log("Servidor http con web sockets listo")
})

connectedServer.on("error", error => console.log)



