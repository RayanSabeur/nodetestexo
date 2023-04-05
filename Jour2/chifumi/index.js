const fs = require("fs");
const readline = require("readline");
const allplayers = JSON.parse( fs.readFileSync("./player.json") );

//travail seul
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const chifumi = ['feuille','pierre','ciseau'];

  let p1 = 0
  let p2 = 0
  rl.setPrompt("game> ");
  rl.prompt();
  
  rl.on("line", (line) => {
   
    if(line.trim() == 'start')
    {
        function StartGame()
        {
         
        allplayers.players.forEach(pl => {
          
              const random = Math.floor(Math.random() * chifumi.length)
              const value = chifumi[random]
                 pl.main = value
              console.log(pl[0])
          });
     
        }

        StartGame()
        
    }
    rl.prompt();
  }).on("close", () => {
    console.log("Have a great day!");
    process.exit(0); // arrêt du processus
  });
  