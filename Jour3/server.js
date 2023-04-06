const fs = require('fs'),
    http = require('http');
    require('./Data/alice.json')
const hostname = "localhost";
const port = "8000";
const alluser = JSON.parse( fs.readFileSync("./Data/all.json") );


const server = http.createServer(function(req, res) {

    const url = req.url.replace("/", "")
    // __dirname donne le chemin absolu pour trouver le fichier
  // ici la politique des urls indiquera le chemin à suivre pour récupérer le fichier

  if (url == '/all') {
    //La méthode writeHead envoie les entêtes au client (navigateur). 
    //Précisez le code HTTP de retour, ici 200, c'est le statut HTTP. 
    res.end(`<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>test</title>   
        </head>
        <body>
            <p>Bienvenue sur la page de test</p>

    ${ alluser.students.map(names => `<p key=${names.name}> ${names.name}</p>`)}
        </body>
    </html>`)
    return;
} else {
    
    alluser.students.map((names) => {
      if(url.includes(names.name)){
        const string = url.toLowerCase()
        fs.readFile(__dirname + "\\Data\\"+ string + ".json", (err, data) => {
            // on gère les erreurs et surtout on retourne une page 404 si il y a un problème
         const test =   JSON.parse( fs.readFileSync(data) );
         console.log(test)
           // si tout se passe bien on retourne les données
           res.writeHead(200);
           res.end(console.log());

        })
   
      }
    })
}


  

  
})

server.listen(port, hostname, () => {
    console.log(`Server running ate http://${hostname}:${port}/`);
});