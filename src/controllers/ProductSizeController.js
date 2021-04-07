import { MidProductSize } from "../models/middle";

class ProductSizeController{
    async createSize(req,res){
        let data = req.body;
        return await MidProductSize.createSize(data);
    }
    async deleteSize(req,res){
        let data = req.query;
        return await MidProductSize.deleteSize(data);
    }
    async getProductSize(req,res){
        let data = req.query;
        return await MidProductSize.getProductSize(data);
    }
    async updateProductSize(req,res){
        let data = req.body;
        return await MidProductSize.updateProductSize(data);
    }
}
export default new ProductSizeController()