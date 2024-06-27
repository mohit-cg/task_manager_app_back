const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  status: { type: String, default: "incomplete" },
  dueDate: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

const Tasks = mongoose.model("Tasks", TaskSchema);

module.exports = Tasks;
