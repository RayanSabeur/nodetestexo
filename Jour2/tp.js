const fs = require("fs");
const readline = require("readline");
const jsontest = JSON.parse( fs.readFileSync("./students.json") );


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.setPrompt("OHAI> ");
  rl.prompt();

  rl.on("line", (line) => {

    jsontest.students.map(element => {
       if(line.trim() ==  element.name)
       {
        for (let index = 0; index < element.notes.length; index++) {
            const elements = element.notes[index];

            console.log(elements)
            
        }
       }
    });
    
    rl.prompt();
  }).on("close", () => {
    console.log("Have a great day!");
    process.exit(0); // arrêt du processus
  });