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
    app.get("/api/secrets/:username", function(req, res) {
        db.Secret
            .findAll({
                where: {
                    username: req.params.username
                }
            })
            .then(function(dbSecret) {
              console.log(dbSecret);
              res.send(dbSecret);
              res.redirect("/profile");
            });
    });


    // POST route for saving a new secret
    app.post("/api/secrets", function(req, res) {

        //FUNCTION TO STRIP HTML TAGS FROM USER INPUT
         function deleteHTML(text){
            return text.replace(/(<([^>]+)>)/ig, "");
         }

         //CONDITIONAL TO ONLY POST IF SECURITY HEADER MATCHES POST REQUEST
        var securityKey = req.headers["sec103"];
        if (securityKey && securityKey === "gogoplz56923") {
        db.Secret
            .create({
                secret: deleteHTML(req.body.secret),
                lat: req.body.lat,
                lng: req.body.lng
            })
            .then(function(dbSecret) {
                res.redirect("/");
            })
        }
    })
}
