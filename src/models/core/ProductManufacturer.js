import { DataTypes } from 'sequelize';
import { sequelize } from '../../connections';
import BaseModel from './BaseModel';
import Product from './Product';

export default class ProductManufacturer extends BaseModel {
    static association() {
        ProductManufacturer.hasMany(Product,{as:'products',foreignKey:'id',hooks: true, onDelete: 'CASCADE', onUpdate : 'NO ACTION'})
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
    tableName: 'productmanufacturer'
};

/**
 * Init Model
 */
 ProductManufacturer.init(attributes, { ...options, sequelize });