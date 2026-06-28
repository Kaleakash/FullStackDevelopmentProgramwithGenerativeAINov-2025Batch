const service = require("../service/loginService");
let signUp   =  async(req, res) =>{
        try {
            let login = req.body;
            const loginData = await service.signUp(login);

            res.status(201).json(loginData);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
let signIn = async(req, res)=> {
        try {
            let login = req.body;
            const loginData = await service.signIn(login)

            res.status(200).json(loginData);
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }




module.exports = {signUp,signIn}