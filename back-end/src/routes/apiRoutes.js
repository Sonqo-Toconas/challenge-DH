const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
const fileUpload = require("../middleware/multer.js");
const validator = require("../middleware/validator/register.js");
const validatorLogin = require("../middleware/validator/login.js");

router.get("/applicants", apiController.getAllApplicants);
router.get("/applicant/:id", apiController.getApplicant);
router.get("/professions", apiController.getProfessions);

router.post(
	"/register",
	fileUpload.single("image"),
	validator.register,
	apiController.register
);

router.patch(
	"/update/:id",
	fileUpload.single("image"),
	validator.update,
	apiController.update
);

router.post("/login", validatorLogin, apiController.login);
module.exports = router;
