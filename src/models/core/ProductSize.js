import { sequelize } from '../../connections';
import BaseModel from './BaseModel';
import { DataTypes } from 'sequelize';
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
        //Roles.hasMany(RolePermission, {as: 'permission', foreignKey: 'role_ids', hooks: true, onDelete: 'CASCADE', onUpdate : 'NO ACTION'});
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
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    type: {
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