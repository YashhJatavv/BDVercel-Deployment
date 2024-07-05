let express = require("express");
let app = express();
let port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Invact Bytr.");
});

app.get("/login", (req, res) => {
  let username = req.query.username;
  let password = req.query.password;
  res.send(username + ", Logged in successfully");
});

app.get("/greet", (req, res) => {
  let studentName = req.query.studentName;
  res.send("Hello, " + studentName + "! Start your coding learning");
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
