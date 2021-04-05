import { DataTypes } from 'sequelize';
import { sequelize } from '../../connections';
import BaseModel from './BaseModel';
export default class Menu extends BaseModel {
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
    key: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    type: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    del: {
        type: DataTypes.TINYINT(10),
        allowNull: true,
        default: 0
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
    tableName: 'menu'
};

/**
 * Init Model
 */
Menu.init(attributes, { ...options, sequelize });