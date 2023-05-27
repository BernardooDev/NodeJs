const fs = require("fs")

fs.writeFile("arquivo.txt","hello world", (err,data) => {
    if (err){
        console.log(err)
    } else {
        console.info("Criado com sucesso")
    }
})