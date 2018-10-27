const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

const passportConfig = (passport) => {
  const strategyFields = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }

  const localSignupCallback = (req, email, password, callback) => {
    // Find a single user by email address
    User.findOne({ 'local.email': email }).then((user) => {

      // If the user exists
      if (user) {
        // Throw an error the the email is in use
        return callback(null, false, req.flash('signupMessage', 'this email is already in use'))
      } else {
        // Else create a user.
        const newUser = new User()
        newUser.local.email = email
        // Encrypt the users password for security.
        // We need to create this function
        newUser.local.password = newUser.encrypt(password)

        // Save the user, and return the saved user.
        newUser.save().then((saved) => {
          return callback(null, saved)
        })
      }
    })
  }

  passport.use('local-signup', new LocalStrategy(strategyFields, localSignupCallback))

  const localLoginCallback = (req, email, password, callback) => {
    User.findOne({ 'local.email': email }).then((user) => {
      if (!user || !user.validPassword(password)) {
        return callback(null, false, req.flash('loginMessage', 'Username or Password not found. Please try again.'))
      }

      return callback(null, user)
    })
  }

  passport.use('local-login', new LocalStrategy(strategyFields, localLoginCallback))
  passport.serializeUser(function(user, callback) {
    callback(null, user.id)
  })

  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
      callback(err, user)
    })
  })
}

module.exports = passportConfig