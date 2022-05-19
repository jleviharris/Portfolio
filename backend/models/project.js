const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now() },
  codingLang: { type: Array, default: [] },
  gitHubLink: { type: String, default: "" },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
module.exports.Project = Project;
module.exports.projectSchema = projectSchema;
