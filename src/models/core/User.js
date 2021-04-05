import { DataTypes } from 'sequelize';
import { sequelize } from '../../connections';
import BaseModel from './BaseModel';
import Sequelize from 'sequelize';

/**
 * Define UserDistributor Model
 * Thong tin tai khoan đăng nhập
 * 
 * @export
 * @class UserDistributor
 * @extends {BaseModel}
 */
export default class User extends BaseModel {

    static association() {
       
    }
}

/**
 * Attributes model
 */
const attributes = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    firstname: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    lastname: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    city: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    mobile: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    avatar: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    type: {
        type: DataTypes.TINYINT(10),
        allowNull: true,
        defaultValue: null
    },
    del: {
        type: DataTypes.TINYINT(10),
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
 function beforeCreate(){
    User.beforeCreate((obj,_) => {
        return obj.id = uuidv4();
    });
}
const options = {
    tableName:'users',
    hooks: {
        beforeCreate: beforeCreate
    }
};
User.init(attributes,{...options, sequelize});