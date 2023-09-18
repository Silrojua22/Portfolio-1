const { Project } = require("../db.js");

const getAllProjectsController = async () => {
    try {
        const allProjects = await Project.findAll();
        return allProjects;
    } catch (error) {
        throw new Error("Error al obtener proyectos: " + error.message);
    }
};

const getProjectById = async (projectId) => {
    try {
        const project = await Project.findByPk(projectId.toUpperCase());
        return project;
    } catch (error) {
        throw new Error("Error al obtener proyecto por ID: " + error.message);
    }
};





module.exports = { getAllProjectsController, getProjectById };
