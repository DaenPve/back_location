const { Router } = require('express')
const router = Router();
const { location } = require('../controllers/index.controller')

/* Obtener ubicacion enviada */
router.post('/location', location);
module.exports = router