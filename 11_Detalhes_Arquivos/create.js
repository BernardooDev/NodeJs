const fs = require("fs")

fs.writeFile("arquivo.txt","Teste",(err,data)=>{
    if(err){
        console.log(err);
        return
    } else {
        console.log("Arquivo criado com sucesso")
    }
})