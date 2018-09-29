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
    User.findOne({email: email})
      .then(function(user) {
        if (!user) {
          return cb(null, false, {message: 'User not found'});
        }

        bcrypt.compare(password, user.password, function(err, res) {
          if (!res) {
            return cb(null, false, {message: err});
          }

          return cb(null, user, {message: 'Login Successful'});
        });
      })
      .catch(function(err) {
        return cb(err);
      });
  }
));
