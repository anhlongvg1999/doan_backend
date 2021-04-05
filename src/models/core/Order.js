import { DataTypes } from 'sequelize';
import { sequelize } from '../../connections';
import BaseModel from './BaseModel';
export default class Order extends BaseModel {
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
    orderCode: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    Price: {
        type: DataTypes.INTEGER(),
        allowNull: true,
        defaultValue: null
    },
    customername: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    phonenumber: {
        type: DataTypes.STRING(255),
        allowNull: true,
        default: 0
    },
    transportId: {
        type: DataTypes.TINYINT(10),
        allowNull: true,
        default: 0
    },
    note: {
        type: DataTypes.STRING(255),
        allowNull: true,
        default: 0
    },
    modifiedDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    deliveryDate: {
        type: DataTypes.DATE,
        allowNull: true
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
    tableName: 'orders'
};

/**
 * Init Model
 */
Order.init(attributes, { ...options, sequelize });