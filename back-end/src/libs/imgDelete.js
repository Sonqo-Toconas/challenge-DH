const fs = require("fs");

imgDelete = (image) => {
	fs.unlink(image, (err) => {
		if (err) {
			console.error("Error deleting the image:", err);
		}
	});
};

module.exports = imgDelete;
