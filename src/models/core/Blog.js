import { DataTypes } from 'sequelize';
import { sequelize } from '../../connections';
import BaseModel from './BaseModel';
export default class Blog extends BaseModel {
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
    title: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        defaultValue: null
    },
    content: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        defaultValue: null
    },
    image: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue: null
    },
    blogcategoryId: {
        type: DataTypes.INTEGER(10),
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
    tableName: 'blogs'
};

/**
 * Init Model
 */
Blog.init(attributes, { ...options, sequelize });