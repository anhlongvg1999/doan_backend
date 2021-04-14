import { ERROR_MESSAGE } from "../../config/error";
import { Product, ProductSize, Size, } from "../core";
import { Op } from "sequelize";
class MidProduct {
    async createProduct(data) {
        console.log('datacreateproducttttttttttttttttttt',data)
        if (!data.name) {
            throw new Error(ERROR_MESSAGE.PRODUCT.ERR_REQUIRE_INPUT);
        }
        const dataPro = await Product.findOne({ where: { name: data.name }})
        if (dataPro) {
            throw new Error(ERROR_MESSAGE.PRODUCT.ERR_EXIST)
        }
        let dataCreate = {
            name: data.name,
            cost: data.cost,
            productmanufacturerId: data.productmanufacturerId,
            productcode: data.productcode,
            image: data.image,
            number: data.number,
            quantity_sold: 0,
            priceold: data.priceold,
            description: data.description
        }
        console.log('ok1')
        let objcreate = await Product.create(dataCreate);
        console.log("ok2")
        await this.updateProductSize(objcreate.id, data.listSize)
        return objcreate;
    }
    async updateProduct(data) {
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
        if (data.image) {
            dataUpdate.image = data.image
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
        if (data.listSize) {
            await this.updateProductSize(data.id, data.listSize)
        }
        return objUpdate.update(dataUpdate)
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
        await this.updateProductSize(data.id, [])
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
        if (data.productmanufacturerId) {
            condition.productmanufacturerId = data.productmanufacturerId
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
    async updateProductSize(product_id, listSize) {
        const oldSize = await this.getSizeOfProduct(product_id);
        const oldSizeIds = oldSize.map(it => it.size_id);
        oldSize.forEach(it => {
            if (!listSize.includes(it.size_id)) {
                it.destroy();
            }
        })

        let insertNewSize = [];
        listSize.forEach(it => {
            if (!oldSizeIds.includes(it)) {
                insertNewSize.push(
                    this.addProductSize({ product_id, size_id: it })
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
}
export default new MidProduct()