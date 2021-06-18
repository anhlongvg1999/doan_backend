import { Order } from "../core";
import { Op } from "sequelize";
import { ERROR_MESSAGE } from "../../config/error";

class MidOder {
    async getOder(data) {
        let condition = {

        };
        if (data.orderCode) {
            condition.orderCode = {
                [Op.like]: `%${data.orderCode}%`
            }
        }
        if (data.transportId) {
            condition.transportId = data.transportId
        }
        if (data.customername) {
            condition.customername = {
                [Op.like]: `%${data.customername}%`
            }
        }
        let { page, limit } = data;
        page = page ? parseInt(page) : 1;
        limit = limit ? parseInt(limit) : 10;
        let [dataPost, total] = await Promise.all([
            Order.findAll({
                where: condition,
                order: [["orderCode", "DESC"]],
                limit,
                offset: (page - 1) * limit
            }),
            Order.count({
                where: condition
            })

        ]);
        return {
            listSize: dataPost,
            total: total || 0,
        }
    }
    async createOder(data) {
        console.log('66666666666666666666',data)
        if (!data.price || !data.customername || !data.address || !data.phonenumber) {
            throw new Error(ERROR_MESSAGE.ORDER.ERR_REQUIRE_INPUT);
        }
        let now = Date.now().toString() 
        let orderCode = data.customername + now;
        let dataCreate = {
            orderCode: orderCode,
            price: data.price,
            customername: data.customername,
            note : data.note,
            address: data.address,
            phonenumber: data.phonenumber,
            transportId : 1
        }
        return await Order.create(dataCreate);
    }
    async updateOrderStatus(data){
        if (!data.id) {
            throw new Error(ERROR_MESSAGE.ORDER.ERR_SEARCH_NOT_FOUND);
        }
        let objUpdate = await Order.findOne({
            where: {
                id: data.id,
            }
        })
        if (!objUpdate) {
            throw new Error(ERROR_MESSAGE.ORDER.ERR_SEARCH_NOT_FOUND)
        }
        let dataUpdate = {

        }
        if(data.transportId){
            dataUpdate.transportId = data.transportId
        }
        console.log(dataUpdate)
        return objUpdate.update(dataUpdate)
    }
}
export default new MidOder();