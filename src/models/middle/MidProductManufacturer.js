import { ERROR_MESSAGE } from "../../config/error";
import { User, ProductManufacturer } from "../core";
import { Op } from "sequelize";

class MidProductManufacturer {
    async createProductManufacturer(data) {
        if (!data.name) {
            throw new Error(ERROR_MESSAGE.PRODUCTMANUFACTURER.ERR_REQUIRE_INPUT)
        }
        const dataProManu = await ProductManufacturer.findOne({ where: { name: { [Op.like]: `%${data.name}%` } } })
        if(dataProManu){
            throw new Error(ERROR_MESSAGE.PRODUCTMANUFACTURER.ERR_EXIST)
        }
        let dataCreate = {
            name : data.name
        }
        return await ProductManufacturer.create(dataCreate);
    }
    async getProductManufacturer(data){
        let condition = {
            
        };
        if (data.name) {
            condition.name = {
                [Op.like]: `%${data.name}%`
            }
        }
        let { page, limit } = data;
        page = page ? parseInt(page) : 1;
        limit = limit ? parseInt(limit) : 10;
        let [dataPost, total] = await Promise.all([
            ProductManufacturer.findAll({
                where:condition,
                order: [["name", "DESC"]],
                limit,
                offset: (page - 1) * limit
            }),
            ProductManufacturer.count({
                where:condition
            })

        ]);
        return {
            listProductManufacturer: dataPost,
            total: total || 0,
        }
    }
    async updateProductManufacturer(data){
        if(!data.id){
            throw new Error(ERROR_MESSAGE.PRODUCTMANUFACTURER.ERR_SEARCH_NOT_FOUND);
        }
        if(!data.name){
            throw new Error(ERROR_MESSAGE.PRODUCTMANUFACTURER.ERR_REQUIRE_INPUT);
        }
        let objUpdate = await ProductManufacturer.findOne({
            where: {
                id: data.id,
            }
        })
        if(!objUpdate){
            throw new Error(ERROR_MESSAGE.USER.ERR_SEARCH_NOT_FOUND)
        }
        let dataUpdate = {
            name : data.name
        }
        return objUpdate.update(dataUpdate)
    }
    async deleteProductManufacturer(data){
        let objDelete = await ProductManufacturer.findOne({
            where:{
                id: data.id,
            }
        })
        if(!objDelete){
            throw new Error(ERROR_MESSAGE.USER.ERR_SEARCH_NOT_FOUND)
        }
        return await ProductManufacturer.destroy({
            where:{
                id: data.id,
            }
        })
    }
}
export default new MidProductManufacturer();