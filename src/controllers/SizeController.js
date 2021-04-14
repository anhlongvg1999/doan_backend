import { MidSize } from "../models/middle";

class SizeController{
    async createSize(req,res){
        let data = req.body;
        return await MidSize.createSize(data);
    }
    async deleteSize(req,res){
        let data = req.query;
        return await MidSize.deleteSize(data);
    }
    async getSize(req,res){
        let data = req.query;
        return await MidSize.getSize(data);
    }
    async getSizebyType(req,res){
        let data = req.query;
        return await MidSize.getSizebyType(data);
    }
    async updateSize(req,res){
        let data = req.body;
        return await MidSize.updateSize(data);
    }
}
export default new SizeController()