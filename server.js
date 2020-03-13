// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

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

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});




// Displays all characters
app.post("/api/tables", function(req, res) {
    console.log(req);
    var obj = {
        customerName: req.body.customerName,
        phoneNumber: req.body.phoneNumber,
        customerEmail: req.body.customerEmail,
        customerID: req.body.customerID
    };
    newReservation.push(obj);
});

app.get("/api/tables", function(req, res) {
    return res.json(newReservation);
});

app.post("/api/clear", function(req, res) {
    console.log(req)
    newReservation = [];
});
// if (newReservation)

app.get("/api/waitlist", function(req, res) {
    return res.json(newReservation.filter((ele, i) => { if (i > 4) return ele }));
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});