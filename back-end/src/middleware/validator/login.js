const { body } = require("express-validator");
const { Applicants } = require("../../database/models/index");

const validator = [
	body("email")
		.isEmail()
		.withMessage("You must fill in the email field")
		.custom(async (value) => {
			const user = await Applicants.findOne({
				where: {
					email: value,
				},
			});
			if (!user) {
				// Will use the below as the error message
				throw new Error("The email does not belong to any user");
			} else {
				return true;
			}
		}),
	body("password")
		.isLength({ min: 4 })
		.withMessage("The password must have at least 4 characters"),
	(req, res, next) => {
		next();
	},
];

module.exports = validator;
