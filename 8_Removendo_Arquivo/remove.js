const fs = require("fs")

fs.unlink("arquivo.txt",(err,data) => {
    if (err){
        console.log(err)
        return
    }

    console.log("Arquivo removido com sucesso")
})