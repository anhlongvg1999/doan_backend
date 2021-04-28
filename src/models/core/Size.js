import { DataTypes } from 'sequelize';
import { sequelize } from '../../connections';
import BaseModel from './BaseModel';
import { Users } from '.';
import { Op } from 'sequelize';
/**
 * Define User Model
 * 
 * @export
 * @class User
 * @extends {BaseModel}
 */
export default class Size extends BaseModel {

    static association() {
      
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
    name:{
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null
    },
    type:{
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
    tableName: 'sizes'
};

/**
 * Init Model
 */
Size.init(attributes, { ...options, sequelize });