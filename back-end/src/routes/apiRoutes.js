const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const multer = require('multer')
const storage = require('../middleware/multer.js')
const validatorRegister = require('../middleware/validator/register.js')
const validatorLogin = require('../middleware/validator/login.js')

let fileUpload = multer({ storage: storage });


router.get('/applicants', apiController.getApplicants);
router.get('/professions', apiController.getProfessions)

router.post('/login', validatorLogin, apiController.login);
router.post('/register', fileUpload.single('image'), validatorRegister, apiController.register)

module.exports = router;