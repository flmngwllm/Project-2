const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
var logger = require('morgan');
const flash = require('connect-flash')
const morgan = require('morgan')
const cookieParser = require('cookie-parser');
const session = require('express-session')
const methodOverride = require('method-override')
const routes = require('./routes/index');
const passport = require('passport')






//Provides extra data in our server logs
app.use(morgan('dev'))


app.use(cookieParser());
app.use(logger('dev'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//allows us to make put/patch and delete requests
app.use(methodOverride('_method'))


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))



//used by passport to handle sessions
app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' }))
app.use(flash())

// Creates an instance of passport to be used in Express
app.use(passport.initialize())
// Sets up sessions to remember a user.
app.use(passport.session())

// This is where we will build out our custom passport configurations
require('./config/passport')(passport)



app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
