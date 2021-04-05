const express = require("express");
const router = express.Router();

function doneToken(value) {
  let response = false;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
  if (typeof value === "string" && value.length === 12) {
    for (i = 0; i < value.length; i++) {
      if (characters.includes(value[i])) {
        response = true;
      }
    }
  }
  return response;
}

//mid global, que verifica se o token é válido
router.use((req, res, next) => {
  // console.log(req.body.token) chegando token
  const value = req.body.token;
  if (doneToken(value)) {
    next();
  } else {
    res.status(400).send("invalid token.");
  }
});

module.exports = router;
