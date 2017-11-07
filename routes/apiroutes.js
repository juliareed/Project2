// Requiring our Secret model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
// GET route for getting all of the secrets
app.get("/secrets", function(req, res) {
    db.Secret.findAll({}).then(function(dbSecret) {
        res.json(dbSecret);
    });
});

// Get route for returning secrets of a specific category
app.get("/api/secrets/username/:username", function(req, res) {
    db.Secret
        .findAll({
            where: {
                category: req.params.username
            }
        })
        .then(function(dbSecret) {
            res.json(dbSecret);

            // if (res.json === req.body.secret) {

            // }
            // if (res.json === req.body.comment) {

            // }
            // if (res.json === )

            //     if (res.json num_rows > 0) {
            //     // output data of each row
            //     while ($row = $result - > fetch_assoc()) {

            //     }
            // } else {
            //     echo "0 results";
            // }
        });
});


// POST route for saving a new secret
app.post("/api/secrets", function(req, res) {
    db.Secret
        .create({
            secret: req.body.secret,
            lat: req.body.lat,
            lng: req.body.lng
        })
        .then(function(dbSecret) {
            res.json(dbSecret);
        });
})
})
}