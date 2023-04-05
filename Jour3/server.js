const http = require('http')
const hostname = "localhost"
const port = "8000"
const user = require('./Utils')

const users = [
    'Alan',
    'Sophie',
    'Bernard',
    'Elie'
];

const server = http.createServer((req,res) => {
    res.writeHead(200, {
        "Content-Type" : "text/plain",
    })
    let url = req.url;

    if(url === "/racine")
    {
        res.end(`<!DOCTYPE html>
        <html> 
        <head>
        <meta charset="utf-8">
        <title> page test </title>
        </head>
        
        <body> ${users.map((el) => {
            return (
               el
            )
        })} </body>`)
    } else if(url === "/shuffle")
    {
        const shuffledArray = users.sort((a, b) => a - b)
        res.end(`<!DOCTYPE html>
        <html> 
        <head>
        <meta charset="utf-8">
        <title> page test </title>
        </head>
        
        <body> ${shuffledArray.map((el) => {
            return (
               el
            )
        })} </body>`)
       
    }
})

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
})
