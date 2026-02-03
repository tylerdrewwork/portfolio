/**
 * Table of contents (ToC) config — left panel nav for the right-panel content.
 *
 * How to add more areas:
 * 1. Add a category in projectData.js (e.g. category: 'newcat') and add projects.
 * 2. In Projects.jsx, category sections get id section-{category} (e.g. section-newcat).
 * 3. Each project gets id = slug of projectName (e.g. "My Project" → my-project).
 * 4. Add an entry here: { id: 'section-newcat', label: 'Display Name', children: [ { id: 'my-project', label: 'My Project' }, ... ] }.
 * IDs in tocData must match: section id = section-{category}, child id = project slug.
 */
export const tocData = [
    {
        id: 'section-aiw',
        label: 'AI Warehouse',
        children: [
            { id: 'mechanics-tools', label: 'Mechanics & Tools' },
            { id: 'systems', label: 'Systems' },
            { id: 'humanoid-agents', label: 'Humanoid Agents' },
            { id: 'ai-warehouse-community-games', label: 'AI Warehouse Community & Games!' }
        ]
    },
    {
        id: 'section-Other Professional',
        label: 'Other Professional',
        children: [
            { id: 'wiperecord-salesforce-stripe-connector', label: 'WipeRecord: SalesForce-Stripe Connector' },
            { id: 'wiperecord-expungement-eligibility-test', label: 'WipeRecord: Expungement Eligibility Test' },
            { id: 'project-motion-intent-inference', label: 'Project Motion: Intent Inference' }
        ]
    },
    {
        id: 'section-Personal Projects',
        label: 'Personal Projects',
        children: [
            { id: 'ski-stunt-simulator-in-development', label: 'Ski Stunt Simulator (in development)' },
            { id: 'backflip-master-2020', label: 'Backflip Master (2020)' },
            { id: 'pbab-physics-based-arena-brawler-2018', label: 'PBAB - Physics Based Arena Brawler (2018)' },
            { id: 'game-jams', label: 'Game Jams' }
        ]
    },
    {
        id: 'section-... Other Things',
        label: '... Other Things',
        children: [
            { id: 'tutorials-talks', label: 'Tutorials & Talks' }
        ]
    }
];
