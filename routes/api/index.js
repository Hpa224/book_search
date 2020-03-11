let router = require("express").Router();
let books = require("./books");

router.use("/books", books);

module.exports = router;
