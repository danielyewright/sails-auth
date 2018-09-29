/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function(req, res) {
    await User.create(req.body).fetch().exec(function (err, user) {
      if (err) {
        return res.status(401).json({err: err});
      }
      // If user created successfuly we return user and token as response
      if (user) {
        // NOTE: payload is { id: user.id}
        res.status(200).json({user: user, token: jwToken.issue({id: user.id})});
      }
    });
  }

};

