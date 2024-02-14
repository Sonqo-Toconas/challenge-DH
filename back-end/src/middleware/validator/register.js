const { body } = require("express-validator");
const { Applicants } = require("../../database/models/index");
const path = require("path");

const isValidDateFormat = (value) => {
	// Expresión regular para validar el formato "YYYY-MM-DD"
	const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

	return dateFormatRegex.test(value);
};


const validator = [
	body("name")
		.isLength({ min: 2 })
		.withMessage("The name must have at least 2 characters"),
	body("lastName")
		.isLength({ min: 2 })
		.withMessage("The last name must have at least 2 characters"),
	body("email")
		.isEmail()
		.withMessage("You must fill in the email field")
		.custom(async (value) => {
			const user = await Applicants.findOne({
				where: {
					email: value,
				},
			});
			if (user) {
				// Will use the below as the error message
				throw new Error("The email you used is already in use");
			} else {
				return true;
			}
		}),
	body("image").custom((values, { req }) => {
		if (!req.file) {
			return true;
		}
		let allowedExtensions = [".png", ".jpg", ".jpeg"];
		let extFile = path.extname(req.file.originalname);
		if (!allowedExtensions.includes(extFile)) {
			throw new Error("Invalid image file extension");
		}
		return true;
	}),
	body("phone").isNumeric().withMessage("You must fill in the phone field"),
	body("URLLinkedin").isURL().withMessage("The URL is not valid"),
	body("birthday")
		.notEmpty()
		.custom((value) => isValidDateFormat(value))
		.withMessage('Invalid date format. Please use "YYYY-MM-DD"'),
	body("sex")
		.notEmpty()
		.isIn(["Male", "Female", "Other"])
		.withMessage("Invalid genre value"),
	body("professions")
		.notEmpty()
		.isIn([1, 2, 3, 4, 5, 6])
		.withMessage("Profession is invalid"),
	body("dni")
		.notEmpty()
		.withMessage("You must fill in the dni field")
		.isLength({ min: 8 })
		.withMessage("The dni must have at least 8 number")
		.custom(async (value) => {
			const user = await Applicants.findOne({
				where: {
					dni: value,
				},
			});
			if (user) {
				// Will use the below as the error message
				throw new Error("The dni you used is already in use");
			} else {
				return true;
			}
		}),
	body("password")
		.isLength({ min: 4 })
		.withMessage("The password must have at least 4 characters"),
	body("passwordConfirm")
		.custom((value, { req }) => {
			return value === req.body.password;
		})
		.withMessage("The password is not the same"),

	(req, res, next) => {
		next();
	},
];

module.exports = validator;
