const { Router } = require("express");
const { getProjectsHandler, getProjectByIdHandler } = require("../handlers/projectHandler.js");

const projectRouter = Router();

projectRouter.get("/", getProjectsHandler);
projectRouter.get("/:id", getProjectByIdHandler)


module.exports = { projectRouter };
