const db = require("../models");
const passport = require("passport")

module.exports = {
    create: function(req, res ){
        db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    passport: function(req, res){
        db.User.register(new db.User({ username : req.body.username }), req.body.password, (err, user) => {
            if (err) {
                return res.status(500).send({ error: err.message });
            }
    
            passport.authenticate('local')(req, res, () => {
              res.redirect('/login');
            });
        });
    }
};