import db from "../loaders/database.js";
import { DataTypes } from "sequelize";

const UsersDB = db('users', {
    
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1, // Default role ID
    }

});

export default UsersDB;

/*export default {
    UsersDB: db(
        'users',
    
    )
}*/

