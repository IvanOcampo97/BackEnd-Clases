// function hacerTarea(num, cb) {
//     console.log('haciendo tarea ' + num)
//     setTimeout(cb,100)
// }

// console.log('inicio de tareas');

// hacerTarea (1, () => {
//     hacerTarea (2, () => {
//         hacerTarea (3, () => {
//             hacerTarea (4, () => {
//                 console.log('fin de tareas')
//             })
//         })
//     })
// })

// console.log('otras tareas..')



const fs = require("fs")

fs.readFile("./fyh.txt","utf-8", (error, fileData) => {
    if(error){
        console.log("Hubo un error", error)
    }else{
        console.log(fileData)
    }
})






const fs = require("fs")

fs.promises.writeFile("./info.txt", "{ author: `Linda` }").then(()=>{
   // console.log('escrito)
}).catch(err => console.log(err))
    
fs.promises.readFile("./info.txt", "utf-8").then((fileData)=>{
    console.log(fileData)
    // modificarlo
    // fs.promises.writeFile('info.txt', ----) escribirlo con las modificaciones
    // fs.promises.writeFile('package.json.coder', ----)  escribir el nuevo archivo
}).catch(err => console.log(err))
