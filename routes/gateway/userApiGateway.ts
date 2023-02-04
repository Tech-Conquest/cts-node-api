const apiExpress = require('express');

const apiRouter = apiExpress.Router();

apiRouter.get('/login', (req:any,res:any) => {
    res.send("user api works");
})
module.exports = apiRouter;