const { Router } = require("express");
const { projectRouter } = require("./projectRouter.js");
const { projectData } = require("../../api.js");
const { Project } = require("../db.js");

const router = Router();

router.use("/project", projectRouter);


router.use("/api", async (req, res) => {
    const allProject = await Project.findAll();
    if (!allProject.length) {
        await Project.bulkCreate(projectData);
        res.status(200).json("Proyectos Cargados");
    } else {
        res.status(200).json("Proyectos ya están cargados");
    }
});


module.exports = router;