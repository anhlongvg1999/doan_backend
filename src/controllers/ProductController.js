import { MidProduct } from "../models/middle";
import { uploadMedia } from '../libs/upload';

class ProductController{
    async createProduct(req,res){
        const dataUpload = await uploadMedia(req, res);
        let product_img = dataUpload ? req.protocol + '://' + req.get('host') +'/' + dataUpload.filename : '';
        let encodeUIR = encodeURI(product_img);
        let data = req.body;
        console.log('999999999999999999',encodeUIR)
        return await MidProduct.createProduct(data,encodeUIR);
    }
    async updateSaleProduct(req,res){

        let data = req.body;
        console.log('saleeeeeeeeeeeeeeeeeeeeeeeeee',data)
        return await MidProduct.updateSaleProduct(data);
    }
    async getProduct(req,res){
        let data = req.query;
        return await MidProduct.getProduct(data);
    }
    async getProductbyId(req,res){
        let data = req.query;
        return await MidProduct.getproductbyid(data.id);
    }
    async updateProduct(req,res){
        const dataUpload = await uploadMedia(req, res);
        let product_img = dataUpload ? req.protocol + '://' + req.get('host') +'/' + dataUpload.filename : '';
        let encodeUIR = encodeURI(product_img);
        console.log('encodeUIR',encodeUIR)
        let data = req.body;
        return await MidProduct.updateProduct(data,encodeUIR);
    }
    async deleteProduct(req,res){
        let data = req.query;
        return await MidProduct.deleteProduct(data);
    }
}
export default new ProductController();