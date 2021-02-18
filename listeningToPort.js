const express = require("express");
const PORT = 4005;

// Create express app
const app = express();

function onRequestUsers(request, response) {
    console.log(request.method);
    response.send("Hey from my personal server, no users yet");
}

app.get("/users", onRequestUsers);

const teams = [
    { id: 0, name: "Real madrid", city: "Madrid" },
    { id: 1, name: "Barcelona", city: "Barcelona" },
    { id: 2, name: "Bayern Munich", city: "Munich" },
    { id: 3, name: "Manchester Utd", city: "Manchester" },
];

app.get("/teams", (request, response) => {
    console.log(
        "Somebody asked for the teams, the type of the request was: ",
        request.method
    );
    // We will go to the database to get this data
    // then send it back
    response.send(teams);
});

app.get("/teams/:teamId/", (request, response) => {
    console.log("The parameter is:", request.params.teamId);

    const parsedTeamId = parseInt(request.params.teamId);

    const theTeam = teams.find(t => t.id === parsedTeamId);
    response.send(theTeam);
});

const document = `<html>
  <head>
    <title>Test page</title>
  </head>

  <body>
    <h1>Testing 123</h1>
  </body>
</html>`;

app.get("/webpage", (request, response) => {
    response.send(document);
});

// Define a callback
const onListen = () => {
    console.log(`Hey im listening on port: ${PORT}`);
};

app.listen(PORT, onListen);