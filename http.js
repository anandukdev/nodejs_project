const http = require("http");

http.createServer((req, res) => {
    res.write("Node.js");
    console.log(req.url);
    console.log("test");
    res.end();
}).listen(3001, () => console.log("Running"));