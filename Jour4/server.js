const http = require('http')
const fs = require('fs')
const hostname = 'localhost'
const port = 8000

const students = [
    { name : "Sonia"},
    { name : "Antoine"}
];

const server = http.createServer((req,res) => {
    let url = req.url
    res.statusCode = 200

    if(url === "/formulaire") {
      
        fs.readFile(__dirname + "\\view\\home.html", (err, data) => {
            // on gère les erreurs et surtout on retourne une page 404 si il y a un problème
           if(err){
               res.writeHead(404);
               throw err;
               // Il ne faut oublier de sortir de la fonction pour ne pas exécuter la suite du script
              
           }
           res.writeHead(200);
           res.end(data);

           return
       });

    }
    if (req.method === 'POST') {
        // Handle post info...
        let body = '';
        req.on('data', data => {
            body += data;
        });
    
        // On écoute maintenant la fin de l'envoi des données avec la méthode on et l'attribut end
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            res.end( JSON.stringify({ "result" : body }));
        });
    }

    if (url === "bootstrap") {
        res.writeHead(200, { "Content-Type": "text/css" });
        const css = fs.readFileSync("./assets/css/bootstrap.min.css"); // on envoit le fichier au client
        res.write(css);
        res.end();
    
        return;
      }

})

server.listen(port,hostname, () => {
    console.log(`server running att http://${hostname}:${port}/`)
})