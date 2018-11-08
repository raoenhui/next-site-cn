var express = require("express");
var appH5 = express();

appH5.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
/*  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", '3.2.1')*/
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

appH5.use(express.static("./7.0.0-canary.11"));
appH5.listen(10086, function(){
  console.log("10086端口开启")
})
