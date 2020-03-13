// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/assets"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var newReservation = [{
        customerName: 'test1',
        phoneNumber: 'bsffbs',
        customerID: 'bbf'
    },
    {
        customerName: 'test2',
        phoneNumber: 'bsffbs',
        customerID: 'bbf'
    },
    {
        customerName: 'test3',
        phoneNumber: 'bsffbs',
        customerID: 'bbf'
    },
    {
        customerName: 'test4',
        phoneNumber: 'bsffbs',
        customerID: 'bbf'
    },
    {
        customerName: 'test5',
        phoneNumber: 'bsffbs',
        customerID: 'bbf'
    },
    {
        customerName: 'test6',
        phoneNumber: 'bsffbs',
        customerID: 'bbf'
    },
    {
        customerName: 'test7',
        phoneNumber: 'bsffbs',
        customerID: 'bbf'
    },
    {
        customerName: 'test8',
        phoneNumber: 'bsffbs',
        customerID: 'bbf'
    }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes.html", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "db.json"));
});


// Where our notes are saved
app.post("/api/notes", function(req, res) {
    fs.readFile("./db.json", "utf8", function(err, data) {
        if (err) {
            console.log(err);
        }
        console.log(JSON.parse(data));
        //Parsing file
        let parsedData = JSON.parse(data);
        parsedData.push(req.body);
        //Giving the note a unique ID number
        for (let note of parsedData) {
            note.id = parsedData.indexOf(note) + 1;
        }
        //Writing newly generated database object to db.json
        fs.writeFile("./db.json", JSON.stringify(parsedData), function(err) {
            if (err) {
                console.log(err);
            }
        });
    });
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});