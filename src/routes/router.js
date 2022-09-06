const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
 const blogController= require("../controllers/blogController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
}) 

router.post("/authors", authorController.authors)
router.post("/blog", blogController.blog)
router.get("/getblog", blogController.getblog)
router.get("/blogs/:blogId", blogController.updateBlog)
router.delete("/deleteBlog/:blogId", blogController.deleteBlog)


module.exports = router;