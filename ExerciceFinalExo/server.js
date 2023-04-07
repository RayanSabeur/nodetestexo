const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = "3000";

const students = JSON.parse( fs.readFileSync("./Data/student.json") );


const server = http.createServer((req, res) => {
    const url = req.url.replace("/", "");
   
    if (req.method === "POST") {
        let body = "";
        req.on("data", (data) => {
            body +=data;
        })

        req.on("end", () => {
            const replacer = new RegExp(/\+/, "g");
            const birthday = body.toString().split(/=/).pop().replace(replacer, ' ');
            const filtername = body.toString().split(/&/).shift().replace(replacer, ' ');
            const name = filtername.split('=').pop()
         
           


            
       
               
            if(name) {
                console.log("name",name)
                var obj = {
                    students: []
                 };
                fs.readFile('./Data/student.json', 'utf8', function readFileCallback(err, data){
                    if (err){
                        console.log(err);
                    } else {
                     
                   let json = JSON.stringify(obj);
                     obj = JSON.parse(data); //now it an object
                    obj.students.push({name: name, birth:birthday});
                    json = JSON.stringify(obj); //convert it back to json
                    fs.writeFile('./Data/student.json', json, 'utf8', (err) => {
                        if (err) {  console.error(err);  return; };
                        console.log("File has been created");
                    
                    }); // write it back 
                }});
            }


           

            res.writeHead(301, { Location: `http://${hostname}:${port}`});
            res.end();
        });
    }

    if (url === "") {
        console.log(students)
        const home = fs.readFileSync("./Data/view/home.html");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(home);
      }

    if (url === "users") {
        res.writeHead(200, {"Content-Type" : "text/html"});

 
        let users = "<ul>";
        for (const { name, birth} of students.students){
          
            users += `<li>${name} - ${birth}  <a type="submit" class="btn" href="/supprimer/${name}">supprimer </a>  </li>`
        }
        users += "</ul>";

        res.end(`
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title> Ajouter un étudiant</title>
                </head>
                <body>
                    ${users}
                    <p><a href="http://${hostname}:${port}"> Accueil</a></p>
                </body>    
            </html>
        `);
    };

    if (url.includes("supprimer")) {
        res.writeHead(200, {"Content-Type" : "text/html"});

        const url = req.url

        const usernamedelete = url.split("/").pop();
        var obj = {
            students: []
         };
        fs.readFile('./Data/student.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
                let suu = {}
           let json = JSON.stringify(obj);
             obj = JSON.parse(data); //now it an object
           obj.students.map((data) => {
            if(data.name === usernamedelete) {
               suu = obj.students.filter(ev => ev.name != usernamedelete)
               
            }
           
            
           })
      
       if(suu) {
        obj.students = []
        suu.forEach(element => {
            obj.students.push(element)
         });
       }
          console.log("test", obj)
          json = JSON.stringify(obj); //convert it back to json
           fs.writeFile('./Data/student.json', json, 'utf8', (err) => {
            if (err) {  console.error(err);  return; };
            console.log("File has been delete");
        
        }); // write it back 
            
        }});


        res.end()

        

    };

    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})