import registerService from "../services/register-service.js"

const register = async (req,res,next) =>{
    try{
        const result = await registerService.register(req.body.username,req.body.email,req.body.password);
        res.status(200).json({
            data: result
        });
    } catch(e)
    {
        next(e);
    }
}

export default{
    register
}