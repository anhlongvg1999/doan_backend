import { sequelize } from '../../connections';
import BaseModel from './BaseModel';
import { DataTypes } from 'sequelize';
import { Size } from '.';
/**
 * Define UserDistributor Model
 * Thong tin tai khoan đăng nhập
 * 
 * @export
 * @class UserDistributor
 * @extends {BaseModel}
 */
export default class ProductSize extends BaseModel {

    static association() {
        ProductSize.belongsTo(Size, {as: 'size', foreignKey: 'size_id', hooks: true, onUpdate : 'NO ACTION'});
    }
}

/**
 * Attributes model
 */
const attributes = {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: null
    },
    size_id: {
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
    tableName: 'productsizes'
};

/**
 * Init Model
 */
 ProductSize.init(attributes, { ...options, sequelize });