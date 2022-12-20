const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

app.get("/*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = 5001


app.listen(port, () => {
    console.log("server lunched", port);
});
