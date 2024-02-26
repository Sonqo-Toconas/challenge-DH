const {
	Applicants,
	Professions,
	Companies,
} = require("../database/models/index");
const { validationResult } = require("express-validator");
const imgDelete = require("../libs/imgDelete.js");
const validate = require("../libs/validate.js");
const bcrypt = require("bcryptjs");

const api = {
	navigate: (req, res) => {
		res.status(200).json({
			navigate: {
				Applicants: "http://localhost:3030/api/applicants",
				Professions: `http://localhost:3030/api/professions`,
				Companies: `http://localhost:3030/api/companies`,
			},
		});
	},
	getAllCompanies: async (req, res) => {
		try {
			const companies = await Companies.findAll();
			res.status(200).json({
				data: companies,
				metadata: {
					totalCount: companies.length,
					timestamp: new Date(),
					url: "http://localhost:3030/api/companies",
				},
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: "internal server error" });
		}
	},
	getApplicant: async (req, res) => {
		const id = req.params.id;
		try {
			const user = await Applicants.findOne({
				where: {
					id: id,
				},
				attributes: {
					exclude: ["professions_id"],
				},
				include: [
					{
						model: Professions,
						as: "professions",
						attributes: ["name", "id"],
					},
				],
			});
			if (!user) return res.status(404).json({ message: "User not found" });

			let formattedUser = {
				...user.dataValues,
				image: `http://localhost:3030/uploads/${user.image ? user.image : "avatar.jpg"
					}`,
				professions: user.professions.name
			};

			res.status(200).json({
				data: formattedUser,
				metadata: {
					timestamp: new Date(),
					url: `http://localhost:3030/api/applicant/${id}`,
				},
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: "internal server error" });
		}
	},
	getAllApplicants: async (req, res) => {
		try {
			const applicantsAll = await Applicants.findAll({
				attributes: { exclude: ["professions_id"] },
				include: [
					{
						model: Professions,
						as: "professions",
						attributes: ["name"],
					},
				],
			});

			if (applicantsAll.length === 0)
				res.status(204).json({ message: "No Content" });

			const modifiedApplicants = applicantsAll.map((applicant) => {
				return {
					...applicant.dataValues,
					image: `http://localhost:3030/uploads/${applicant.image ? applicant.image : "avatar.jpg"
						}`,
					professions: applicant.professions.name,
					userUrl: `http://localhost:3030/api/applicant/${applicant.id}`,
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
		const formattedErros = validate(errors, req);
		if (formattedErros) return res.status(422).json({ formattedErros });

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

		let hashpassword = await bcrypt.hash(password, 10);
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
				image: req.file?.filename || "avatar.jpg",
				professions_id: professions,
				password: hashpassword,
			});
			res.status(201).json({
				data: {
					...user.dataValues,
					image: `http://localhost:3030/uploads/${user.image}`,
				},
				metadata: {
					totalCount: user.length,
					timestamp: new Date(),
					url: "http://localhost:3030/api/register",
				},
			});
		} catch (error) {
			console.log(error);
			imgDelete(req.file.path);
			res.status(500).json({ message: "Internal Server Error" });
		}
	},
	login: async (req, res) => {
		let errors = validationResult(req);

		const formattedErros = validate(errors, req);
		if (formattedErros) return res.status(422).json(formattedErros);

		const { email, password } = req.body;

		const user = await Applicants.findOne({
			where: {
				email: email,
			},
		});
		if (!user) res.status(404).json({ message: "user not found" });

		let validPassword = await bcrypt.compare(password, user.password);

		if (!validPassword)
			return res.status(401).json({ message: "incorrect password" });

		return res.status(200).json({ message: "successful" });
	},
	update: async (req, res) => {
		let errors = validationResult(req);
		const formattedErros = validate(errors, req);
		if (formattedErros) return res.status(422).json(formattedErros);

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

		const userFound = await Applicants.findByPk(req.params.id);

		if (!userFound) res.status(400).json({ message: "user not found" });

		try {
			let hashPassword = userFound.password;

			if (password) hashPassword = await bcrypt.hash(password, 10);

			const user = await Applicants.update(
				{
					dni: dni,
					name: name,
					last_name: lastName,
					email: email,
					phone: phone,
					URL_linkedin: URLLinkedin,
					birthday: birthday,
					sex: sex,
					image: req.file?.filename || userFound.image,
					professions_id: professions,
					password: hashPassword,
				},
				{
					where: {
						id: userFound.id,
					},
				}
			);
			res.status(201).json({
				data: Boolean(user),
				metadata: {
					timestamp: new Date(),
					url: `http://localhost:3030/api/update/${userFound.id}`,
				},
			});
		} catch (error) {
			console.log(error);
			if (req.file) imgDelete(req.file.path);
			res.status(500).json({ message: "Internal Server Error" });
		}
	},
};

module.exports = api;
