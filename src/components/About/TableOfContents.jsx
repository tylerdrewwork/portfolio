import { useState, useEffect, useRef } from 'react';
import { tocData } from './tocData';
import './TableOfContents.scss';

function TableOfContents() {
    const [activeSection, setActiveSection] = useState('');
    const observerRef = useRef(null);

    useEffect(() => {
        const contentPanel = document.querySelector('[data-content-panel]');
        if (!contentPanel) return;

        const observedIds = new Set([
            ...tocData.map((item) => item.id),
            ...tocData.flatMap((item) => (item.children || []).map((c) => c.id))
        ]);

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: contentPanel,
                rootMargin: '-20% 0px -60% 0px',
                threshold: 0
            }
        );

        const sections = contentPanel.querySelectorAll('[id]');
        sections.forEach((section) => {
            if (observedIds.has(section.id)) {
                observerRef.current.observe(section);
            }
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const handleClick = (e, id) => {
        e.preventDefault();
        const contentPanel = document.querySelector('[data-content-panel]');
        const element = document.getElementById(id);
        if (element && contentPanel) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const isActive = (id) => {
        // Check if this section or any of its children are active
        const item = tocData.find(item => item.id === id);
        if (!item) return false;
        
        if (activeSection === id) return true;
        
        // Check if any child is active
        return item.children.some(child => activeSection === child.id);
    };

    return (
        <nav className="table-of-contents">
            {tocData.map((item) => (
                <div key={item.id} className="toc-section">
                    <a
                        href={`#${item.id}`}
                        onClick={(e) => handleClick(e, item.id)}
                        className={`toc-section-link ${isActive(item.id) ? 'active' : ''}`}
                    >
                        {item.label}
                    </a>
                    {item.children && item.children.length > 0 && (
                        <ul className="toc-children">
                            {item.children.map((child) => (
                                <li key={child.id}>
                                    <a
                                        href={`#${child.id}`}
                                        onClick={(e) => handleClick(e, child.id)}
                                        className={`toc-child-link ${activeSection === child.id ? 'active' : ''}`}
                                    >
                                        {child.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </nav>
    );
}

export default TableOfContents;
