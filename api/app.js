var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
var createError = require("http-errors");
const config = require("./config/database");
const videoRoutes = require("./routes/videoRoutes")

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));
app.use(express.static(path.join(__dirname, "public")));

// Connect to Mongo DB using mongoose
const DB = config.database.replace("<password>", config.password);
mongoose.Promise = global.Promise;
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database connected!");
    },
    (err) => {
      console.log("Error while connecting to database!");
      console.log(err);
    }
  );

// Routes
app.use('/sign-kit/videos', homeRoutes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
