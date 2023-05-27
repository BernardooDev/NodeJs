const fs = require("fs")

fs.stat("arquivo.txt", (err,stats) => {
    if(err){
        console.log(err);
        return
    } else {
        console.log(stats);
    }
})