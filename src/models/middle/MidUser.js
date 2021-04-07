import { ERROR_MESSAGE } from "../../config/error";
import { User } from "../core";
import { checkPassword, hashPassword } from "../../libs/encrypt";
import { generateToken } from "../../libs/token";
import { Op } from "sequelize";

class MidUser {
    async getUserByEmail(email){
        const userData = await User.findOne({
            where:{
                email: email,
                del: 0
            }
        })
        return userData;
    }
    async loginUser(credentials){
        const {email, password} = credentials;
        if(!email){
            throw new Error(ERROR_MESSAGE.LOGIN.ERR_REQUIRE_EMAIL);
        }

        if(!password){
            throw new Error(ERROR_MESSAGE.LOGIN.ERR_REQUIRE_PASSWORD);
        }

        const userData = await this.getUserByEmail(email);
        if(!userData){
            throw new Error(ERROR_MESSAGE.LOGIN.ERR_ACC);
        }
        const isCorrectPass = await checkPassword(password,userData.password);
        if(!isCorrectPass){
            throw new Error(ERROR_MESSAGE.LOGIN.ERR_PASS);
        }

        const token = await generateToken({userid: userData.id, email: userData.email});
        return token;
    }
    async getUserByid(id) {
        let user = await User.findOne({
            where: {
                id,
                del: 0,
            }
        })
        return user;
    }
    async createUser(data){
        console.log(data)
        if(!data.email || !data.password || ! data.firstname || !data.lastname || !data.mobile){
            throw new Error(ERROR_MESSAGE.USER.ERR_REQUIRE_INPUT);
        }
        const userData = await this.getUserByEmail(data.email);
        if(userData){
            throw new Error(ERROR_MESSAGE.USER.ERR_EXIST);
        }
        let dataCreate = {
            firstname: data.firstname,
            lastname:data.lastname,
            address:data.address,
            email: data.email,
            del:0,
            password: hashPassword(data.password),
            mobile: data.mobile,
            type: 1,
        }
        return await User.create(dataCreate);
    }
    async getAllUser(data){
        console.log('11111111111111111111111111111',data)
        let condition = {
            
        };
        if (data.email) {
            condition.email = {
                [Op.like]: `%${data.email}%`
            }
        }
        let { page, limit } = data;
        page = page ? parseInt(page) : 1;
        limit = limit ? parseInt(limit) : 10;
        let [dataPost, total] = await Promise.all([
            User.findAll({
                where: condition,
                order: [["email", "DESC"]],
                limit,
                offset: (page - 1) * limit
            }),
            User.count({
                where: condition
            })

        ]);
        return {
            user: dataPost,
            total: total || 0,
        }
    }
    getUserById(userid) {
        return User.findOne({
            where: {
                id: userid
            }
        })
    }
    async deleteUser(data){
        console.log('111111111111111up1',data)
        let objDelete = await User.findOne({
            where:{
                id: data.id,
                del: 0
            }
        })
        if(!objDelete){
            throw new Error(ERROR_MESSAGE.USER.ERR_SEARCH_NOT_FOUND)
        }
        let dataDelete = {
            del: 1,
        }
        return objDelete.update(dataDelete)
    }
    async updateUser(data){
        console.log(data)
        if(!data.id){
            throw new Error(ERROR_MESSAGE.USER.ERR_SEARCH_NOT_FOUND);
        }
        if(!data.email || !data.mobile){
            throw new Error(ERROR_MESSAGE.USER.ERR_REQUIRE_INPUT);
        }
        let objUpdate = await User.findOne({
            where: {
                id: data.id,
            }
        })
        if(!objUpdate){
            throw new Error(ERROR_MESSAGE.USER.ERR_SEARCH_NOT_FOUND)
        }
        const userData = await User.findOne({
            where:{
                email: data.email,
            }
        })
        if(!userData){
            throw new Error(ERROR_MESSAGE.USER.ERR_SEARCH_NOT_FOUND);
        }
        let dataUpdate = {
            email: data.email,
            mobile: data.mobile,
            firstname: data.firstname,
            lastname:data.lastname,
            address:data.address,
            city:data.city,
            birthday:data.birthday,
            del: data.del
        };
        return objUpdate.update(dataUpdate);
    }
}
export default new MidUser();