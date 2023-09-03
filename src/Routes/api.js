const express = require("express");
const router = express.Router();
const blogController = require("../Controllers/blogController");

router.get("/create-blog", blogController.create);
router.get("/read-blog", blogController.read);
router.get("/delete-blog", blogController.delete);
router.get("/update-blog", blogController.update);

module.exports = router;
