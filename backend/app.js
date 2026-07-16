const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    } else if (req.url === "/style.css") {
        fs.readFile(path.join(__dirname, "public", "style.css"), (err, data) => {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });

    } else if (req.url === "/script.js") {
        fs.readFile(path.join(__dirname, "public", "script.js"), (err, data) => {
            res.writeHead(200, { "Content-Type": "application/javascript" });
            res.end(data);
        });

    } else {
        res.writeHead(404);
        res.end("Page Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
