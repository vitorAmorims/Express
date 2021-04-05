const express = require("express");

const router = express.Router();

router.get("/:x/:y", (req, res, next) => {
  // console.log(req.url)
  const x = Number(req.url.slice(1, 2));
  const y = Number(req.url.slice(3, 4));
//   console.log(y);
  if (typeof x === "number" && typeof y === "number") {
    res.send({ success: true, soma: x * y });
    next();
  } 
});

module.exports = router;
