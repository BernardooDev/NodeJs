const fs = require("fs")

fs.unlink("renomeado.txt",(err) => {
    if (err){
        console.log(err)
    }
    console.log("Apagado com sucesso")
})