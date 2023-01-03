// MongoDB en M.E.R.N (MongoDB.Express.ReactJS.NodeJS)



// Mongo DB es una Base de Datos NoSQL

// Express es una infraestructura de aplicaciones de Node JS

// ReactJs es una biblioteca para crear componentes e interfaz de usuario 

// Node JS permite ejecutar javascript fuera del navegadror, por ejemplo del lado del servidor


// Mongoose es una dependencia Javascript que realiza la conexion a la instancia de MongoDB

// Mongoose es un ODM (OBject Documment Mapper) esto significa que puede definir objetos con un esquema fuertemente tipado

// Toda la bibilioteca de Mongoose en https://mongoosejs.com/docs/


const mongoose = require("mongoose");
const { usuarios } = require("./models/usuarios");
const { estudiantes } = require("./models/estudiantes");

const URL = "mongodb://localhost:27017/mongooseExample";

CRUD();
async function CRUD() {
    try {

        // Con el siguiente const nos conectamos a la base de datos creada en MongoDB
        const connection = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log("Database connected");



        console.log("CREATE");
        // creas el objeto 
        const usuario = {nombre: "Ivan", email: "Ivan@gmail.com"};
        // creas el nuevo usuario usuando "usuarios" que se exporta en la linea 18 y le pasas como parametro el objeto anterior
        const schemaUsuario = new usuarios(usuario);
        // se guarda el usuario creado con el schema 
        const savedUser = await schemaUsuario.save();
        console.log(savedUser);




        console.log("READ");
        // lista los objetos de usuarios
        const listaUsuarios = await usuarios.find({})
        console.log(listaUsuarios);


        const data = [
            { nombre: "Ivan", apellido: "Ocampo"},
            { nombre: "Karen", apellido: "Ocampo"}
        ];

        await data.forEach((item) => {
            const schemaEstudiantes = new estudiantes(item);
            schemaEstudiantes.save();
        })

        const listaEstudiantes = await estudiantes.find({})
        console.log(listaEstudiantes);


        console.log("UPDATE")
        const usuarioUpdate = await usuarios.updateOne({nombre: "Lucas"}, {$set:{password: 1234}})
        console.log(usuarioUpdate);
    
        } catch (error) {
            console.log("error");
        }
    }