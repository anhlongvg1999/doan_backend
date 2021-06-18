import { MidOder } from "../models/middle";
class OrderController{
    async createOder(req,res){
        let data = req.body;
        return await MidOder.createOder(data);
    }
    async getOder(req,res){
        let data = req.query;
        return await MidOder.getOder(data);
    }

    async updateOrderStatus(req,res){
        let data = req.body;
        return await MidOder.updateOrderStatus(data);
    }
}
export default new OrderController();