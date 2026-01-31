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
            { id: 'ai-warehouse-humanoid-agents', label: 'Agents' },
            { id: 'muscle-system', label: 'Muscle System' },
            { id: 'replay-system', label: 'Replay System' },
            { id: 'unit-tests-automation', label: 'Unit Tests & Automation' },
            { id: 'ai-warehouse-community-games', label: 'AI Warehouse Community Games!' }
        ]
    },
    {
        id: 'section-other',
        label: 'Other Work',
        children: [
            { id: 'example-1', label: 'Example 1' },
            { id: 'example-2', label: 'Example 2a' }
        ]
    }
];
