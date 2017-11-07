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

<<<<<<< HEAD
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
=======
  // Get route for returning secrets of a specific category
  app.get("/api/secrets/:username", function(req, res) {
    db.Secret
      .findAll({
        where: {
          username: req.params.username
        }
      })
      .then(function(dbSecret) {
        res.json(dbSecret);
      });
  });
>>>>>>> b3d326b1652c7a40f1adad478b2aaf0f1082e548

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
<<<<<<< HEAD
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
=======
      .create({
        secret: req.body.secret,
        lat: req.body.lat,
        lng: req.body.lng
      })
      .then(function(dbSecret) {
        res.redirect("/map");
      });
  });
}
>>>>>>> b3d326b1652c7a40f1adad478b2aaf0f1082e548
