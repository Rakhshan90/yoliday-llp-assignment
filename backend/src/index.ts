import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

// Read the JSON file
const projectsPath = path.join(__dirname, 'projects.json');
const getProjectsData = (): any[] => {
    if (!fs.existsSync(projectsPath)) {
        throw new Error(`File not found at path: ${projectsPath}`);
    }
    const data = fs.readFileSync(projectsPath, 'utf-8');
    return JSON.parse(data);
};

// Updated /projects route
app.get('/projects', (req: Request, res: Response) => {
    const { title } = req.query;
    const projects = getProjectsData();

    let filteredProjects = projects;

    if (title) {
        filteredProjects = projects.filter(project => {
            const matchesTitle = title ? project.title.toLowerCase().includes(String(title).toLowerCase()) : true;
            // const matchesContent = content ? project.content.toLowerCase().includes(String(content).toLowerCase()) : true;
            // return matchesTitle && matchesContent;
            return matchesTitle;
        });
    }

    res.status(200).json(filteredProjects);
});

const PORT = 3008;
app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
})