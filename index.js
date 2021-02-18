const { response } = require('express')
const express = require('express') //import express
const app = express() //creat express server named app
    //regester GET endpoint
const PORT = 3000

function onRequest() { //handeler function
    console.log('testing...')
}
app.get('/test', onRequest) // '/' route to listen on onRequest its callback function runs when the route is requested
app.get('/hello', (request) => { console.log(request.method) })
app.get('/hello', (request) => { console.log(request.path) })

function onListen() {
    console.log(`listening on: ${PORT}`)
}
app.listen(PORT, onListen) //start listening on port- onListen is callback runs when server start

app.get('/hello', (request, response) => { response.send('hello client') })

app.get(
    '/movie/:title', // declares a parameter named title
    (request, response) => { // handler callback
        response.send(request.params.title)
    }
)
app.get("/teames", (request, response) => { // handler callback
        const msg = "somebody ask for teams"
        response.send(msg)
    })
    //3000 common port for servers 

app.listen(PORT, () => console.log(`listening on : ${PORT}`))