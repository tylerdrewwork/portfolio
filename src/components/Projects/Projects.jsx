import { useMemo } from 'react';
import projectData from './projectData';
import ProjectImageGallery from './ProjectImageGallery';
import './Projects.scss';

function Projects() {
    // Group projects by category
    const groupedProjects = useMemo(() => {
        const groups = {};
        projectData.forEach((project) => {
            const category = project.category || 'other';
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(project);
        });
        return groups;
    }, []);

    // Category display names
    const categoryNames = {
        'aiw': 'AI Warehouse',
        'other': 'Other Work'
    };

    return (
        <section id="projects" className="projects-section">
            {Object.entries(groupedProjects).map(([category, projects]) => (
                <div key={category} id={`section-${category}`} className="project-category-section">
                    <h2 className="project-category-title">{categoryNames[category] || category}</h2>
                    <div className="project-category-group">
                    {projects.map((project, index) => {
                        // Create a unique ID from project name (slugified)
                        const projectSlug = project.projectName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                        return (
                            <article key={`${project.id}-${project.projectName}`} className="project-item" id={projectSlug}>
                                <h3 className="project-title">{project.projectName}</h3>
                                {project.projectImages && project.projectImages.length > 0 && (
                                    <ProjectImageGallery
                                        images={project.projectImages}
                                        projectName={project.projectName}
                                    />
                                )}
                                <p className="project-description">
                                    {project.description}
                                </p>
                            </article>
                        );
                    })}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Projects;
