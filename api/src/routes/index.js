const { Router } = require('express');
const CountryRouter = require('./countryRouter.js');
const ActivityRouter = require('./activityRouter.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', CountryRouter)

router.use('/activities', ActivityRouter)



module.exports = router;
