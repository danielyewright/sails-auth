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
				// return res.json(200, {
				// 	user: user,
				// 	token: jwToken.issue({id: user.id})
        // })

        return res.status(200).json({
          user: user,
          token: jwToken.issue({id: user.id})
        })
			}

			req.logIn(user, function(err) {
        if (err) {
					res.send(err);
				}

				return res.send({
          message: info.message,
          user
        });
      });
    })(req, res);
  },

	logout: function(req, res) {
    req.logout();
    // res.redirect('/');
  },

  // register: async function(req, res) {
  //   await User.create(req.body).exec(function (err, user) {
  //     if (err) {
  //       // return res.json(err.status, {err: err});
  //       console.log(err)
  //       return res.status(401).json({err: err});
  //     }
  //     // If user created successfuly we return user and token as response
  //     if (user) {
  //       // NOTE: payload is { id: user.id}
  //       // res.json(200, {user: user, token: jwToken.issue({id: user.id})});
  //       res.status(200).json({user: user, token: jwToken.issue({id: user.id})});
  //     }
  //   });
  // }

};

