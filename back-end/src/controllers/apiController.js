const { Applicants, Professions } = require("../database/models/index");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const fs = require("fs");
const api = {
	getApplicants: async (req, res) => {
		try {
			const applicantsAll = await Applicants.findAll();

			if (applicantsAll.length === 0)
				res.status(204).json({ message: "No Content" });

			const modifiedApplicants = applicantsAll.map((applicant) => {
				return {
					...applicant.dataValues,
					image: `/uploads/${applicant.image}`,
				};
			});

			res.status(200).json({
				data: modifiedApplicants,
				metadata: {
					totalCount: modifiedApplicants.length,
					timestamp: new Date(),
					url: "http://localhost:3030/api/applicants",
				},
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: "internal server error" });
		}
	},
	getProfessions: async (req, res) => {
		try {
			const professionsAll = await Professions.findAll();

			if (professionsAll.length === 0)
				res.status(204).json({ message: "No Content" });

			res.status(200).json({
				data: professionsAll,
				metadata: {
					totalCount: professionsAll.length,
					timestamp: new Date(),
					url: "http://localhost:3030/api/professions",
				},
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: "internal server error" });
		}
	},
	register: async (req, res) => {
		let errors = validationResult(req);
		if (!errors.isEmpty()) {
			const formattedErros = errors
				.array()
				.map((error) => ({ path: error.path, message: error.msg }));
			if (req.file) {
				try {
					fs.unlink(req.file.path);
					console.error("Error deleting the image:", err);
				} catch (error) {
					console.log("Image deleted successfully");
				}
			}
			res.status(422).json(formattedErros);
			return;
		}

		const {
			dni,
			name,
			lastName,
			email,
			phone,
			URLLinkedin,
			birthday,
			sex,
			professions,
			password,
		} = req.body;

		try {
			const user = await Applicants.create({
				dni: dni,
				name: name,
				last_name: lastName,
				email: email,
				phone: phone,
				URL_linkedin: URLLinkedin,
				birthday: birthday,
				sex: sex,
				image: req?.file || "default.png",
				professions_id: professions,
				password: bcrypt.hashSync(req.body.password, 10),
			});
			res.status(201).json({
				data: user,
				metadata: {
					totalCount: user.length,
					timestamp: new Date(),
					url: "http://localhost:3030/api/register",
				},
			});
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
		}
	},
	login: async (req, res) => {
		let errors = validationResult(req);

		if (!errors.isEmpty()) {
			const formattedErros = errors
				.array()
				.map((error) => ({ path: error.path, message: error.msg }));
			res.status(422).json(formattedErros);
			return;
		}

		const { email, password } = req.body;

		const user = await Applicants.findOne({
			where: {
				email: email,
			},
		});
		if (!user) res.status(404).json({ message: "user not found" });

		let validPassword = await bcrypt.compare(password, user.password);

		if (!validPassword) res.status(401).json({ message: "incorrect password" });
		res.status(200).json({ message: 'successful'})
	},
};

module.exports = api;
