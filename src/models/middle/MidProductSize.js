import { ERROR_MESSAGE } from "../../config/error";
import { ProductSize } from "../core";
import { Op } from "sequelize";

class MidProductSize{
    async createSize(data){
        if(!data.name){
            throw new Error(ERROR_MESSAGE.PRODUCTSIZE.ERR_REQUIRE_INPUT);
        }
        if(!data.type){
            throw new Error(ERROR_MESSAGE.PRODUCTSIZE.ERR_TYPE)
        }
        const dataProManu = await ProductSize.findOne({ where: { name: { [Op.like]: `%${data.name}%` } } })
        if(dataProManu){
            throw new Error(ERROR_MESSAGE.PRODUCTSIZE.ERR_EXIST)
        }
        let dataCreate = {
            name : data.name,
            type : data.type
        }
        return await ProductSize.create(dataCreate);
    }
    async deleteSize(data){
        let objDelete = await ProductSize.findOne({
            where:{
                id: data.id,
            }
        })
        if(!objDelete){
            throw new Error(ERROR_MESSAGE.PRODUCTSIZE.ERR_SEARCH_NOT_FOUND)
        }
        return await ProductSize.destroy({
            where:{
                id: data.id,
            }
        })
    }
    async getProductSize(data){
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
            ProductSize.findAll({
                where:condition,
                order: [["name", "DESC"]],
                limit,
                offset: (page - 1) * limit
            }),
            ProductSize.count({
                where:condition
            })

        ]);
        return {
            listSize: dataPost,
            total: total || 0,
        }
    }
    async updateProductSize(data){
        if(!data.id){
            throw new Error(ERROR_MESSAGE.PRODUCTSIZE.ERR_SEARCH_NOT_FOUND);
        }
        let objUpdate = await ProductSize.findOne({
            where: {
                id: data.id,
            }
        })
        if(!objUpdate){
            throw new Error(ERROR_MESSAGE.PRODUCTSIZE.ERR_SEARCH_NOT_FOUND)
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
export default new MidProductSize()