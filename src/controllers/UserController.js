import { MidUser } from "../models/middle";

class UserController{
    async createUser(req,res){
        let data = req.body;
        return await MidUser.createUser(data);
    }
    async getAllUser(req,res){
        let dataQuery = req.query;
        return await MidUser.getAllUser(dataQuery);
    }
    async deleteUser(req,res){
        let dataQuery = req.query;
        return await MidUser.deleteUser(dataQuery);
    }
    async updateUser(req,res){
        let data = req.body;
        return await MidUser.updateUser(data);
    }
    async getUserInfo(req, res) {
        let { userData } = req;
        console.log('userdataaaaaa',userData)
        userData = userData.toJSON();
        if (!userData.id) {
            userData.name = "";
        } else {
            const accountData = await MidUser.getUserByid(userData.id);
            userData.adminData = accountData || "";
        }

        return userData;
    }
}
export default new UserController();