"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Read the JSON file
const projectsPath = path_1.default.join(__dirname, 'projects.json');
const getProjectsData = () => {
    if (!fs_1.default.existsSync(projectsPath)) {
        throw new Error(`File not found at path: ${projectsPath}`);
    }
    const data = fs_1.default.readFileSync(projectsPath, 'utf-8');
    return JSON.parse(data);
};
// Updated /projects route
app.get('/projects', (req, res) => {
    const { title, content } = req.query;
    const projects = getProjectsData();
    let filteredProjects = projects;
    if (title || content) {
        filteredProjects = projects.filter(project => {
            const matchesTitle = title ? project.title.toLowerCase().includes(String(title).toLowerCase()) : true;
            const matchesContent = content ? project.content.toLowerCase().includes(String(content).toLowerCase()) : true;
            return matchesTitle && matchesContent;
        });
    }
    res.status(200).json(filteredProjects);
});
const PORT = 3008;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
