
const reqAdaptor = require('./../request-adaptor')

const endpoint = require('../../config/APIConfig.json');

export const loginService = async (postParam:any) => {
    const validateUser = await reqAdaptor(endpoint.userServiceSpec.endPointDev).post(`${endpoint.userServiceSpec.entryPoint}/validateUser`,
        {
        ...postParam
        }
    )
    return validateUser.data
}
