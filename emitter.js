const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("login" , (data) => {
    console.log(data);
});

emitter.on("logout" , (data) => {
    console.log(data);
});

emitter.emit("login", { text: "user is logged in "});

emitter.emit("logout", { text: "user is logged out  "});