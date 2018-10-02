const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const http = require("http");
const path = require("path");

const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cookieParser());

if (process.env.SESSION_SECRET) {
    app.use(
        session({
            secret: process.env.SESSION_SECRET,
            resave: true,
            saveUninitialized: true
        })
    );
} else {
    app.use(
        session({
            secret: "test",
            resave: true,
            saveUninitialized: true
        })
    );
}

var passport = require("passport");

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "dist")));

const port = process.env.PORT || "3100";
app.set("port", port);

const server = http.createServer(app);
require("./server/app")(app);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});

server.listen(port, function() {
    console.log("Running on " + app.get("port"));
});
