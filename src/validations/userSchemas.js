//import { Sequelize, DataTypes } from "sequelize";
import config from "../config/index.js";
import db from "../loaders/database.js";
import { DataTypes, Sequelize } from "sequelize";

const CreateUserValidation = db(
    'users',
    {
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                isEmail: true,
            },
            unique: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        role_id: {
            type: DataTypes.INTEGER,
            generated: true,
            reference: {
                defaultValue: 1, // Default role ID
            },
            
        }
    },
    {
        /*sequelize: new Sequelize(config.database.url, {
            dialect: 'mysql',
        }),
        modelName: 'users',*/

           
});

export default CreateUserValidation;
    
    