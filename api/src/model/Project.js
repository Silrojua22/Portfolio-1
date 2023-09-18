const { DataTypes } = require("sequelize");
// const { sequelize } = require("../db");

module.exports = (sequelize) => {
    sequelize.define("Project", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
            isURL: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
};
