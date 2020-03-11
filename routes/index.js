const path = require("path");
const axios = require("axios");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });

// let book;

// axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyBKFOTy8lC5nkcir3iHZEkXzYn-aSnaAkw`)
//     .then(results => 
//         console.log(results)
//         // res.json(results.data.items)
//         )
//     .catch(err => res.status(422).json(err));

module.exports = router;

