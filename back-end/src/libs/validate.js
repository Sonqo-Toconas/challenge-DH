const imgDelete = require("../libs/imgDelete.js");

const validate = (errors, req) => {
	if (!errors.isEmpty()) {
		const formattedErros = errors
			.array()
			.map((error) => ({ path: error.path, message: error.msg }));
		if (req.file) {
			imgDelete(req.file.path);
		}
		return formattedErros;
	}else {
        false
    }
};

module.exports = validate;
