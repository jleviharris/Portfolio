const { Project } = require("../models/project");

const express = require("express");
const router = express.Router();

// Get all projects
// http://localhost:3007/api/projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    if (!projects) return res.status(400).send(`No projects to show!`);
    return res.send(projects);
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
});
// Get a project
// http://localhost:3007/api/projects/:projectId
router.get("/:projectId", async (req, res) => {
  try {
    const project = await Project.find({ projectId: req.params.projectId });
    if (!project) return res.status(400).send(`No project to show!`);
    return res.send(project);
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
});

module.exports = router;
