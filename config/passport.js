var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findOne({id}, function(err, user) {
    cb(err, user);
  });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passportField: 'password'
  },
  function(email, password, cb) {
    User.findOne({email: email}, function(err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false, {message: 'User not found'});
      }

      bcrypt.compare(password, user.password, function(err, res) {
        if (!res) {
          return cb(null, false, { message: 'Invalid Password' });
        }

        let userDetails = {
          email: user.email,
          id: user.id
        };

        return cb(null, userDetails, { message: 'Login Succesful'});
      });
    });
  }
));
