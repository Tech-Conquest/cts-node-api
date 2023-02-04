const nodeExpress = require('express');

const router = nodeExpress.Router();

router.use("/user",require('./gateway/userApiGateway.ts'))


module.exports = router;