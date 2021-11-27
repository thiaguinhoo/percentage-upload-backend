const { Router } = require('express');

const uploadsController = require('../controllers/uploads.controller');

const router = Router();

// upload an image
router.post('/', uploadsController.create);

module.exports = router;
