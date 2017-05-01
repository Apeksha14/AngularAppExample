var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "wvulqmhjj9tbtc1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "k9q06zawxtwutsre",
  password: "izygeq3teeihhey1",
  port:3306,
  database: "sf3b0qo9q81ld5rz"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
