import { ERROR_MESSAGE } from "../../config/error";
import { Product, ProductSize, Size, } from "../core";
import { Op } from "sequelize";
class MidProduct {
    async createProduct(data,product_img) {
        console.log('datacreateproducttttttttttttttttttt',data)
        if (!data.productcode) {
            throw new Error(ERROR_MESSAGE.PRODUCT.ERR_REQUIRE_INPUT);
        }
        const dataPro = await Product.findOne({ where: { productcode: data.productcode }})
        if (dataPro) {
            throw new Error(ERROR_MESSAGE.PRODUCT.ERR_EXIST)
        }
        let dataCreate = {
            name: data.name,
            cost: data.cost,
            productmanufacturerId: data.productmanufacturerId,
            productcode: data.productcode,
            image: product_img,
            sale: 0,
            quantity_sold: 0,
            priceold: data.priceold,
            description: data.description
        }
        console.log('ok1')
        let objcreate = await Product.create(dataCreate);
        console.log("ok2")
        await this.updateProductSize(objcreate.id, JSON.parse(data.listSize))
        return objcreate;
        //return 1;
    }
    async updateSaleProduct(data){
        console.log('dataupdate',data)
        if (!data.id) {
            throw new Error(ERROR_MESSAGE.PRODUCT.ERR_SEARCH_NOT_FOUND);
        }
        let objUpdate = await Product.findOne({
            where: {
                id: data.id,
            }
        })
        if (!objUpdate) {
            throw new Error(ERROR_MESSAGE.PRODUCT.ERR_SEARCH_NOT_FOUND)
        }
        let dataUpdate = {

        }
        if(data.sale){
            dataUpdate.sale = data.sale
        }
        console.log(dataUpdate)
        return objUpdate.update(dataUpdate)
    }
    async updateProduct(data,encodeUIR) {
        console.log('dataupdate',data)
        if (!data.id) {
            throw new Error(ERROR_MESSAGE.PRODUCT.ERR_SEARCH_NOT_FOUND);
        }
        let objUpdate = await Product.findOne({
            where: {
                id: data.id,
            }
        })
        if (!objUpdate) {
            throw new Error(ERROR_MESSAGE.PRODUCT.ERR_SEARCH_NOT_FOUND)
        }
        let dataUpdate = {

        }
        if (data.name) {
            dataUpdate.name = data.name
        }
        if (data.cost) {
            dataUpdate.cost = data.cost
        }
        if (data.productmanufacturerId) {
            dataUpdate.productmanufacturerId = data.productmanufacturerId
        }
        if (data.productcode) {
            dataUpdate.productcode = data.productcode
        }
        if (encodeUIR) {
            dataUpdate.image = encodeUIR
        }
        if (data.quantity_sold) {
            dataUpdate.quantity_sold = data.quantity_sold
        }
        if (data.priceold) {
            dataUpdate.priceold = data.priceold
        }
        if (data.description) {
            dataUpdate.description = data.description
        }
        console.log(dataUpdate)
        await objUpdate.update(dataUpdate)
        return await this.getproductbyid(data.id)
    }
    async deleteProduct(data){
        let objDelete = await Product.findOne({
            where:{
                id: data.id,
            }
        })
        if(!objDelete){
            throw new Error(ERROR_MESSAGE.PRODUCT.ERR_SEARCH_NOT_FOUND)
        }
        await ProductSize.destroy({
            where:{
                product_id: data.id
            }
        })
        return await Product.destroy({
            where:{
                id: data.id,
            }
        })
    }
    async getProduct(data) {
        let condition = {
        };
        if (data.name) {
            condition.name = {
                [Op.like]: `%${data.name}%`
            }
        }
        if (data.productcode) {
            condition.productcode = {
                [Op.like]: `%${data.productcode}%`
            }
        }
        if (data.productmanufacturerId) {
            condition.productmanufacturerId = data.productmanufacturerId
        }
        if (data.sale) {
            condition.sale = {
                [Op.gte] : data.sale
            }
        }
        let { page, limit } = data;
        page = page ? parseInt(page) : 1;
        limit = limit ? parseInt(limit) : 10;
        let includeOpt = [
            {
                association: "productmanufacturer",
                required: true,
            },{
                association:"productsize",
                required: true,
                include:{
                    association:"size",
                    required: false,
                }
            }
        ];
        let [dataPost, total] = await Promise.all([
            Product.findAll({
                where: condition,
                order: [["name", "DESC"]],
                limit,
                offset: (page - 1) * limit,
                include : includeOpt
            }),
            Product.count({
                where: condition
            })

        ]);
        return {
            listProduct: dataPost,
            total: total || 0,
        }
    }
    // async getProductbyId(product_id){
    //     let includeOpt = [
    //         {
    //             association: "productmanufacturer",
    //             required: true,
    //         },{
    //             association:"productsize",
    //             required: true,
    //             include:{
    //                 association:"size",
    //                 required: false,
    //             }
    //         }
    //     ];
    //     return Product.findOne({
    //         where:{id :product_id},
    //         include : includeOpt
    //     })
    // }
    async updateProductSize(product_id, listSize) {
        console.log('listSizelistSize',listSize)
        const oldSize = await this.getSizeOfProduct(product_id);
        const oldSizeIds = oldSize.map(it => it.size_id);
        oldSize.forEach(it => {
            listSize.map(item =>{
                if (!item.size_id.includes(it.size_id)) {
                    it.destroy();
                }
            })
            
        })

        let insertNewSize = [];
        listSize.forEach(it => {
            if (!oldSizeIds.includes(it.size_id)) {
                insertNewSize.push(
                    this.addProductSize({ product_id, size_id: it.size_id,number: it.number,quantity_sold : 0 })
                )
            }
        })

        return listSize;
    }
    async getSizeOfProduct(product_id) {
        return ProductSize.findAll({
            where: {
                product_id
            }
        })
    }
    addProductSize(data) {
        return ProductSize.create(data);
    }
    async getproductbyid(productid)
    {
        console.log('3333333333',productid)
        let includeOpt = [
            {
                association: "productmanufacturer",
                required: true,
            },{
                association:"productsize",
                required: true,
                include:{
                    association:"size",
                    required: false,
                }
            }
        ];
        return await Product.findOne({
            where: { id : productid},
            include : includeOpt
        })
    }
}
export default new MidProduct()