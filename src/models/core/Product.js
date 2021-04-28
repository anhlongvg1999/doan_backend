import { max } from 'lodash';
import { DataTypes } from 'sequelize';
import { sequelize } from '../../connections';
import BaseModel from './BaseModel';
import ProductManufacturer from './ProductManufacturer';
import ProductSize from './ProductSize';
export default class Product extends BaseModel {
    static association() {
        Product.hasMany(ProductSize, {as: 'productsize', foreignKey: 'product_id', hooks: true, onUpdate : 'NO ACTION'})
        Product.belongsTo(ProductManufacturer, {as: 'productmanufacturer', foreignKey: 'productmanufacturerId', hooks: true, onUpdate : 'NO ACTION'})
    }
}
const attributes = {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    cost: {
        type: DataTypes.INTEGER(),
        allowNull: true,
        defaultValue: null
    },
    productmanufacturerId: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: null
    },
    productcode: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    priceold: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: null
    },
    sale: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: null
    },
    description: {
        type: DataTypes.STRING(8000),
        allowNull: true,
        defaultValue: null
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
};

/**
 * Options model
 */
const options = {
    tableName: 'products'
};

/**
 * Init Model
 */
Product.init(attributes, { ...options, sequelize });