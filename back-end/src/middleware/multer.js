const path = require("path");
const multer = require("multer");

const uploadDir = path.join(__dirname, "..", "img");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadDir);
	},
	filename: (req, file, cb) => {
		let newFileName = "user-" + Date.now() + path.extname(file.originalname);
		cb(null, newFileName);
	},
});

module.exports = fileUpload = multer({ storage: storage });;
