const express = require("express");

const app = express();

const port = 8000;

const sampleJSON = {

    name: "Neeraj",
    subject: "Learning Backend"
}

app.get("/", (req, res) => {
    res.send("This is home");
})

app.get("/json", (req, res) => {
    res.json(sampleJSON);
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})