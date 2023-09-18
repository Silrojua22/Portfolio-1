require("dotenv").config();
const { Sequelize } = require("sequelize")
const ProjectFunction = require("./model/Project.js")

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false }
);


ProjectFunction(sequelize);

const { Project } = sequelize.models;

module.exports = {
    sequelize,
    ...sequelize.models
}