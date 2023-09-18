const { getAllProjectsController, getProjectById } = require("../controllers/projectController.js");

const getProjectsHandler = async (req, res) => {
    try {
        const allProject = await getAllProjectsController()
        res.status(200).send(allProject);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const getProjectByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await getProjectById(id);
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({
                error: {
                    message: "Project not found",
                    values: { id }
                },
            });
        }
    } catch (error) {
        console.error('Error getting project by ID:', error);
        res.status(500).json({ error: 'Error getting project by ID' });
    }
};
module.exports = { getProjectsHandler, getProjectByIdHandler };