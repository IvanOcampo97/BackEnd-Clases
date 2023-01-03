import ClienteSQL from "./clienteSQL.js";

// enviarle al cliente las opciones de conexion
const options = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'coderHouse'
    }
}

const csql = new ClienteSQL(options)


// realizar operaciones sobre a base de datos usando node y knex

    // crear una tala
    csql.crearTabla().then(()=>{
        // realizar acciones sobre la tabla que se creo
        // insertar dato en la tabla
        console.log("Tabla creada")

        const articulos = [
            {
                nombre:"Ferrari",
                precio:2543244,
                stock:2,
                codigo:"FerrariL1"
            },
            {
                nombre:"Lambo",
                precio:13254678,
                stock:2,
                codigo:"LamboL1"
            },
            
        ]

        return csql.insertar(articulos)
    }).then(()=>{
        console.log("Articulos insertados")
    }).catch(err => console.log(err))
