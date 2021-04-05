const express = require("express");
const app = express();
const axios = require("axios");
const posts = require('./posts.json')
// console.log(posts)

const routerBtcPrice = require("./Routes/btc_price");

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

app.use("/btc/price", routerBtcPrice);

app.post("/btc/price", (req, resp) => {
  const url = "https://api.coindesk.com/v1/bpi/currentprice/BTC.json";
  axios
    .get(url)
    .then((response) =>
      resp.send({ sucess: true, data: response.data.bpi.USD.rate })
    );
});

app.get('/posts', (req, res) => {
  res.send({ sucess: true, data: posts})
})

app.get('/posts/:id', (req, res) => {
  // console.log(req.params.id)
  const { id } = req.params;
  // console.log(posts)
  if ( id ) {
    const newPosts = posts.find(post => post.id === Number(id));
    // console.log(newPosts)
    res.send({ sucess: true, data: newPosts})
  }
  res.send({ sucess: false, data: []})
})

app.listen(3000, () => {
  console.log("Running on port 3000");
});
