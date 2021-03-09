//            Token,Middleware 


const express = require("express");
const app = express();

const Token = require("./middleware/Token");
const Validation = require("./middleware/Validation");

// const middleware = [Token, Validation]; (Remove Token and Validation and add middleware on app.get)

app.get("/profile", Token, Validation,(req,res ) => {
    console.log("succes");
    res.send("Hello");
});



// function Token(req,res,next){
//     console.log(req.url);

//     console.log("create token");
//     next();
// }



const PORT = process.env.PORT || 3001 ;

app.listen (PORT);





















// express js to set path from html (index.html , contact.html )

// const express = require("express");
// const app = express();

// app.use(express.static("views"));

// app.get("*", (req,res) => {
//     res.json("404 error");
// });

// const PORT = process.env.PORT || 3001 ;

// app.listen (PORT, () => console.log(`server running on ${PORT}`));















//  express js to set path from views


// const express = require("express");
// const app = express();
// const path = require("path");

// app.get("/", (req,res) => {
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// app.get("/contact", (req,res) => {
//     res.sendFile(path.join(__dirname, "views", "contact.html"));
// });

// app.get("*", (req,res) => {
//     res.json("404 error");
// });

// const PORT = process.env.PORT || 3001 ;

// app.listen (PORT, () => console.log(`server running on ${PORT}`));






//                      Modules set from utils.js
// const {logger, myName}= require("./utils");

// console.log(logger());
// console.log(myName);








// function sayhello(name) {
//     console.log("hello  "+ name)
// }

// sayhello("Anandu");
 











//                  http with path (diffrent pages ) and server
// const http = require("http");
// const fs = require("fs");
// const path = require("path");


// const server = http.createServer((req, res) => {
//     if(req.url === "/") {
//         fs.readFile(path.join(__dirname, "views", "index.html"), "utf8", (err, data) => {
//             if (err) throw err;
//             res.writeHead(200, {"content-type": "text/html"});
//             res.end(data);
//         });
//     }

//     if(req.url === "/contact") {
//         fs.readFile(path.join(__dirname, "views", "contact.html"), "utf8", (err, data) => {
//             if (err) throw err;
//             res.writeHead(200, {"content-type": "text/html"});
//             res.end(data);
//         });
//     }
// });
// const PORT = process.env.PORT || 3001 ;

// server.listen(PORT,() => console.log(`Server Running on ${PORT}` ));







//                          server 3001 set
//     http.createServer((req, res) => {
//     res.write("Node.js");
//     console.log(req.url);
//     res.end();
// }).listen(3001, () => console.log("Running"));
