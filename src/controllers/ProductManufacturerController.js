import { MidProductManufacturer } from "../models/middle";

class ProductManufacturerController{
    async createProductManufacturer(req,res){
        let data = req.body;
        return await MidProductManufacturer.createProductManufacturer(data);
    }
    async getallProductManufacturer(req,res){
        let dataQuery = req.query;
        return await MidProductManufacturer.getProductManufacturer(dataQuery);
    }
    async updateProductManufacturer(req,res){
        let data = req.body;
        return await MidProductManufacturer.updateProductManufacturer(data);
    }
    async deleteProductManufacturer(req,res){
        let data = req.query;
        return await MidProductManufacturer.deleteProductManufacturer(data);
    }
}
export default new ProductManufacturerController();