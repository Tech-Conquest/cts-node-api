const nodeExpress = require('express');

const router = nodeExpress.Router();

const service = require('./services/service')

router.use("/user",require('./gateway/userApiGateway.ts'))

router.post('/login', async (req:any,res:any) => {
    try{
        const authenticate =await service.loginService(req.body)
        res.send(authenticate);
    }
    catch(err:any){
        console.log(err)
    }
})


module.exports = router;