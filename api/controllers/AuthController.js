/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var passport = require('passport');

module.exports = {
  login: function(req, res) {
    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        return res.send({
          message: info.message,
          user
        });
      }
      else {
        return res.status(200).json({
          user: user,
          token: jwToken.issue({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
          })
        })
      }

      req.login(user, function(err) {
        if (err) {
          res.send(err);
        }

        return res.send({
          message: info.message,
          user
        });
      });
    })(req, res);
  }

};

