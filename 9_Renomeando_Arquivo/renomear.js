const fs = require("fs")

fs.rename("arquivo.txt","renomeado.txt", (err) => {
    if(err){
        console.log(err)
    }
    console.log("Renomeado com sucesso")
})