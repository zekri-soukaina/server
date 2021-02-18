// import express
const express = require('express')

// create express server
const app = express()

function render(favorite) {
    const document = `<html>
    <head>
      <title>My favorite movie</title>
    </head>

    <body>
      <h1>${favorite}</h1>
    </body>
  </html>`

    return document
}

// register GET /page endpoint
app.get(
    '/movie/:title', // route
    (request, response) => { // handler callback
        const favorite = `My favorite movie is ${request.params.title}`

        const page = render(favorite)

        response.send(page)
    }
)

// 3000 is common
const port = 3000

// start listening
app.listen(
    port,
    () => console.log(`Listening on :${port}`)
)