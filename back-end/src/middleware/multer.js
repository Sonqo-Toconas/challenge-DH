const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./img/");
	},
	filename: (req, file, cb) => {
		let newFileName = "user-" + Date.now() + path.extname(file.originalname);
		cb(null, newFileName);
	},
});

module.exports = storage