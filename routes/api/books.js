const router = require("express").Router();
const bookcontroller = require("../../controllers/controller");

router.route("/")
  .get(bookcontroller.findAll)
  .post(bookcontroller.create);

router
  .route("/:id")
  .get(bookcontroller.findById)
  .put(bookcontroller.update)
  .delete(bookcontroller.remove);

module.exports = router;