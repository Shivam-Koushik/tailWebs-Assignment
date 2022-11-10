const express = require('express');
const router = express.Router();
const Controller = require("../controller/controller")

router.post("/signUp",Controller.createSignUp)
router.put("/subjects",Controller.subjects)
router.get("/filterSubjects",Controller.filterSubjects)
router.delete("/deleteSubjects",Controller.deleteSubjects)

module.exports = router;