import { MidProduct } from "../models/middle";

class ProductController{
    async createProduct(req,res){
        let data = req.body;
        return await MidProduct.createProduct(data);
    }
    async getProduct(req,res){
        let data = req.query;
        return await MidProduct.getProduct(data);
    }
    async updateProduct(req,res){
        let data = req.body;
        return await MidProduct.updateProduct(data);
    }
    async deleteProduct(req,res){
        let data = req.query;
        return await MidProduct.deleteProduct(data);
    }
}
export default new ProductController();