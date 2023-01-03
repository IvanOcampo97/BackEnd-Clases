const express = require('express')
const { Router } = express


const app = express()
const personas = Router()
const mascotas = Router()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const listaPersonas =[]
const listaMascotas =[]

// const validarDatos = (req, res , next) => {
//     const {nombre, raza} = req.body

//     if(!nombre || !raza){
//         res.status(400).send('Tus datos no estan completos')
//     }

//     next()
// }

personas.get('/', (req, res) => {
    res.send(listaPersonas)
} )

personas.post('/', (req, res) => {
    const { nombre, edad} = req.body

    if(!nombre || !edad){
        res.status(400).send('Tus datos no estan completos')
    }
    listaPersonas.push({nombre, edad})
    res.send('Persona guardada con exito')
} )

// 

mascotas.get('/', (req, res) => {
    res.send(listaMascotas)
} )

mascotas.post('/', (req, res) => {

    const {nombre, raza} = req.body

    if(!nombre || !raza){
        res.status(400).send('Tus datos no estan completos')
    }

    next()

    }, (req, res) => {listaMascotas.push({nombre, raza})
    res.send('Mascota guardada con exito')} 
    )

app.use('/persona', personas)
app.use('/mascota', mascotas)

const PORT = 8080
app.listen(PORT, () => {
    console.log('server on')
})