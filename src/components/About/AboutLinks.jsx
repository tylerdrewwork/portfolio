import './About.scss';

const LINKS = [
    { href: '#', label: 'Resumé' },
    { href: '#', label: 'LinkedIn' },
    { href: '#', label: 'Twitter' },
    { href: '#', label: 'GitHub' },
];

function AboutLinks({ layout = 'column', className = '' }) {
    return (
        <nav
            className={`about-links ${layout === 'row' ? 'about-links-row' : ''} ${className}`.trim()}
            aria-label="Profile links"
        >
            {LINKS.map(({ href, label }) => (
                <a key={label} href={href} className="about-link">
                    → {label}
                </a>
            ))}
        </nav>
    );
}

export default AboutLinks;
