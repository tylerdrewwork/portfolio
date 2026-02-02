import { useMemo, useState, useEffect, useRef } from 'react';
import projectData from './projectData';
import ProjectImageGallery from './ProjectImageGallery';
import './Projects.scss';

function StickyCategoryTitle({ children }) {
    const [isStuck, setIsStuck] = useState(false);
    const sentinelRef = useRef(null);

    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsStuck(!entry.isIntersecting),
            { threshold: 0, rootMargin: '-1px 0px 0px 0px' }
        );
        observer.observe(sentinel);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div ref={sentinelRef} className="project-category-title-sentinel" aria-hidden="true" />
            <h2 className={`project-category-title ${isStuck ? 'is-stuck' : ''}`}>
                {children}
            </h2>
        </>
    );
}

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
        'aiw': 'AI Warehouse Projects',
        'Other Professional': 'Other Professional Projects',
        'Personal Projects': 'Personal Projects'
    };

    return (
        <section id="projects" className="projects-section">
            {Object.entries(groupedProjects).map(([category, projects]) => (
                <div key={category} id={`section-${category}`} className="project-category-section">
                    <StickyCategoryTitle>
                        {categoryNames[category] || category}
                    </StickyCategoryTitle>
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
                                {project.description && (
                                    <p
                                        className="project-description"
                                        dangerouslySetInnerHTML={{ __html: project.description }}
                                    />
                                )}
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
