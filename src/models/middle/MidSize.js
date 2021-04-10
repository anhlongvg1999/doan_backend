import { ERROR_MESSAGE } from "../../config/error";
import { Size } from "../core";
import { Op } from "sequelize";

class MidSize{
    async createSize(data){
        if(!data.name){
            throw new Error(ERROR_MESSAGE.SIZE.ERR_REQUIRE_INPUT);
        }
        if(!data.type){
            throw new Error(ERROR_MESSAGE.SIZE.ERR_TYPE)
        }
        const dataProManu = await Size.findOne({ where: { name: { [Op.like]: `%${data.name}%` } } })
        if(dataProManu){
            throw new Error(ERROR_MESSAGE.SIZE.ERR_EXIST)
        }
        let dataCreate = {
            name : data.name,
            type : data.type
        }
        return await Size.create(dataCreate);
    }
    async deleteSize(data){
        let objDelete = await Size.findOne({
            where:{
                id: data.id,
            }
        })
        if(!objDelete){
            throw new Error(ERROR_MESSAGE.SIZE.ERR_SEARCH_NOT_FOUND)
        }
        return await Size.destroy({
            where:{
                id: data.id,
            }
        })
    }
    async getSize(data){
        let condition = {
            
        };
        if (data.name) {
            condition.name = {
                [Op.like]: `%${data.name}%`
            }
        }
        if(data.type){
            condition.type = data.type
        }
        let { page, limit } = data;
        page = page ? parseInt(page) : 1;
        limit = limit ? parseInt(limit) : 10;
        let [dataPost, total] = await Promise.all([
            Size.findAll({
                where:condition,
                order: [["name", "DESC"]],
                limit,
                offset: (page - 1) * limit
            }),
            Size.count({
                where:condition
            })

        ]);
        return {
            listSize: dataPost,
            total: total || 0,
        }
    }
    async updateSize(data){
        if(!data.id){
            throw new Error(ERROR_MESSAGE.SIZE.ERR_SEARCH_NOT_FOUND);
        }
        let objUpdate = await Size.findOne({
            where: {
                id: data.id,
            }
        })
        if(!objUpdate){
            throw new Error(ERROR_MESSAGE.SIZE.ERR_SEARCH_NOT_FOUND)
        }
        let dataUpdate = {
            
        }
        if(data.name){
           dataUpdate.name = data.name
        }
        if(data.type){
            dataUpdate.type = data.type
        }
        return objUpdate.update(dataUpdate)
    }
}
export default new MidSize()