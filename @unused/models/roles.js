import { Sequelize, DataTypes } from "sequelize";



export default {
    Roles: Sequelize.define(
    'Roles',
    {
        role_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'roles', // Name of the roles table
                key: 'id', // Key in the roles table
            },
            allowNull: false,
        },
        role_name: {
            type: DataTypes.VARCHAR(50),
            allowNull: false,
        },

})
}
