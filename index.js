const express = require("express");

const app = express();

app.use(express.json());

function myFunction(password) {
  let response = true;
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (i = 0; i < password.length; i++) {
    if (!numbers.includes(password[i])) {
      response = false;
    }
  }
  return response;
}

function validateEmailPassword(value) {
  const { email, password } = value;
  //validacao password tipo numeral
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
  let token = "";
  let passwordLenght = password.toString();
  
  if (
    regexEmail.test(email) &&
    myFunction(password) &&
    passwordLenght.length >= 4 &&
    passwordLenght.length <= 8
  ) {
    for (let i = 0; i < 12; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }
  // console.log(token);
  return token;
}

app.post("/login", (req, res) => {
  const payload = req.body;
  //   console.log(payload)
  const value = validateEmailPassword(payload);
  // console.log(value);
  if (value.length > 0) {
    res.status(200).send(value);
  } else {
    res.status(401).send("email or password is incorrect");
  }
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
