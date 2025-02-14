var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var userRouter = require("./routes/user");
var graphRouter = require("./routes/graphUpdate");
var stockRouter = require("./routes/stocks");
var checkRouter = require("./routes/checkUser");
var buyStockRouter = require("./routes/buyStock");
var sellStockRouter = require("./routes/sellStock");
var historyRouter = require("./routes/history");
var adminRouter = require("./routes/dataDump");
var authRoutes = require("./routes/auth");
var registerRouter = require("./routes/register");
var app = express();
global.index = 1;
global.nIndex = 1;

const startTime = new Date("Sat Apr 01 2023 09:00:00 GMT+0530");

global.min = 0;
global.Min = 0;

const setIndex = () => {
  const currTime = new Date();
  const minDiff =
    parseInt(currTime.getTime() - startTime.getTime()) / (1000 * 60);
  min = minDiff % 30;
  if (minDiff < 0) {
    index = 0;
    nIndex = 0;
  } else {
    const x = minDiff / 30;
    //const x = minDiff/2;

    const y = minDiff / 30;
    //const y = minDiff/2;

    nIndex = Math.ceil(y);
    index = Math.ceil(x);
  }
};

setIndex();

const indId = setInterval(() => {
  //console.log("hi"+index);
  min += 1;
  if (min >= 30) {
    index += 1;
    nIndex += 1;
    min = 0;
  }

  if (index >= 65) {
    //console.log("Hi");
    clearInterval(indId);
  }
}, 60000);

//news-index
// const nIndId = setInterval(() => {
//   Min += 1;
//   if (Min >= 2) {
//     nIndex += 1;
//     Min = 0;
//   }
//   if (nIndex >= 153) {
//     console.log("Hello");
//     clearInterval(nIndId);
//   }
// }, 60000);

app.use(cors());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/profile", userRouter);
app.use("/graphUpdate", graphRouter);
app.use("/stock", stockRouter);
app.use("/checkUser", checkRouter);
app.use("/buyStock", buyStockRouter);
app.use("/sellStock", sellStockRouter);
app.use("/history", historyRouter);
app.use("/admin", adminRouter);
app.use("/user", registerRouter);
app.get("/time", (req, res) => {
  res.json({ serverTime: new Date().toISOString() });
});


// app.use('/api/auth', authRoutes);

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
  res.render("error");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started - ${port}`);
});

module.exports = app;
