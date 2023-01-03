import knexLib from 'knex'


// creamos el cliente
class ClienteSQL {
    constructor(config){
        this.knex = knexLib(config)
    }

    crearTabla(){
        // devuelve una promesa
            return this.knex.schema.createTable('articulos', table => {
                table.increments('id').primary();
                table.string('nombre', 15).notNullable();
                table.string('codigo', 10).notNullable();
                table.float('precio');
                table.integer('stock');
            })
        }

    insertar(data){
        return this.knex("articulos").insert(data)
    }

    consultar(){

    }

    consultarById(id){

    }


    eliminar(id){
        
    }

    actualizar(id){
        
    }

    close(){
        this.knex.destroy()
    }
}

export default ClienteSQL