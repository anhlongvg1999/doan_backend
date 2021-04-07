import { DataTypes } from 'sequelize';
import { sequelize } from '../../connections';
import BaseModel from './BaseModel';
export default class Product extends BaseModel {
    static association() {
        
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
    sizeId:{
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    number: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: null
    },
    quantity_sold :{
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: null
    },
    priceold: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: null
    },
    brandId: {
        type: DataTypes.INTEGER(10),
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