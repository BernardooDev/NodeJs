const path = require("path")
const fs = require("fs")

fs.writeFile("arquivo.txt","Arquivo criado",(err,data) =>{
    if(err){
        console.log(err)
    } else {
        console.log("Arquivo criado")
        console.log(path.resolve("arquivo.txt"))
    }
})



