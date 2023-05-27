const fs = require("fs")

fs.writeFile("arquivo.txt","Esse arquivo irá ser renomeado",(err) => {
    if(err){
        console.log(err)
    }
    console.log("Criado com sucesso")
})