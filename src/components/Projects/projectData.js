// projectImages: string (URL) or { src, caption?, offsetX?, offsetY? }. offsetX/offsetY (default 0) set object-position % in gallery tile only (0,0=top-left, 50,50=center).
// description: supports HTML (e.g. <br /> for line breaks).
const projectData = [
    {
        id: 1,
        category: 'aiw',
        projectName: 'AI Warehouse Humanoid Agents',
        description: 'Created all of the agent\'s rigs for AI Warehouse. Created systems like abilities, room modules, agent modules, and auto behavior parameter tuning. Agent abilities was one of the biggest improvements, since it made creating new agents with new mechanics much easier.',
        projectImages: [
            { src: 'assets/images/projects/ai-warehouse/tooling-1.png', caption: 'Tooling screenshot' },
            { src: 'assets/images/projects/ai-warehouse/tooling-2.png', caption: 'Tooling overview' },
            { src: 'assets/images/projects/ai-warehouse/agent-horse.png', caption: 'Agent Horse' },
            { src: 'assets/images/projects/ai-warehouse/agent-pip.png', caption: 'Agent Pip' },
        ]
    },
    {
        id: 2,
        category: 'aiw',
        projectName: 'Mechanics, Systems, & Tools Creation',
        description: 'I created: all of the mechanics, tooling and systems you see in the videos! I\'m very proud of the work I did here. <br /><br />Tooling was made for the Game Development and Machine Learning teams on request and sometimes proactively if they agreed it would be helpful. Systems were made to help the Game Development team build environments faster and more efficiently. There were also many other systems created to fulfill the needs of the current production (video).',
        projectImages: [
            { src: 'assets/images/projects/ai-warehouse/gifs/agent muscles motion.gif', caption: 'Agent motion' },
            { src: 'assets/images/projects/ai-warehouse/gifs/muscles.gif', caption: 'Muscle system' },
            { src: 'assets/images/projects/ai-warehouse/agent muscles.png', caption: 'Agent rig' },
            { src: 'assets/images/projects/ai-warehouse/maze-game-analytics.png', caption: 'Maze game analytics', offsetX: 0, offsetY: 0 },
            { src: 'assets/images/projects/ai-warehouse/gifs/bike.gif', caption: 'Bike', offsetX: 0, offsetY: 0 },
        ]
    },
    {
        id: 2,
        category: 'aiw',
        projectName: 'Replay System',
        description: 'Full support for recording and replaying state of objects in scene. With optimizations for performance and storage.',
        projectImages: ['assets/images/projects/ai-warehouse/replaydata.png']
    },  
    {
        id: 3,
        category: 'aiw',
        projectName: 'Unit Tests & Automation',
        description: 'Space to feature collaborations, commissions, or shipped features.',
        projectImages: []
    },
    {
        id: 4,
        category: 'aiw',
        projectName: 'AI Warehouse Community Games!',
        description: 'Room for upcoming or in-progress ideas you want to tease.',
        projectImages: []
    },
    {
        id: 5,
        category: 'new',
        projectName: 'TEST!',
        description: 'TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST TBHIS IS A TEST .',
        projectImages: []
    },
    {
        id: 6,
        category: 'Other Professional',
        projectName: 'WipeRecord: SalesForce-Stripe Connector',
        description: 'Lead of this project. Bi-directional connector which syncs SalesForce and Stripe accounts and orders, in realtime. Built with JS, Node and Apex.',
        projectImages: []
    },
    {
        id: 7,
        category: 'Personal Projects',
        projectName: 'Ski Stunt Simulator (in development)',
        description: 'My ultimate passion project based on an old game from the early 2000s. After being inspired by the game, I reached out to the original creator Michiel van de Panne, who graciously gave me permission to build a modern version of the game based on the screenshots and videos I sent him. Articulated ragdoll physics, PID controllers, level design. Built in Unity C#.',
        projectImages: []
    },
    {
        id: 8,
        category: 'Personal Projects',
        projectName: 'Game Jam: Infinity Money Glitch (2025)',
        description: 'Built in 4 days for GMTK 2025 in a team of 2. Abuse the system to print infinite money! Roguelike mechanics with inventory management. Built in Unity C#.',
        projectImages: [
            {src: 'assets/images/projects/moneyglitch.gif', caption: 'Infinity Money Glitch', offsetX: 50, offsetY: 0},
            ]
    },
    {
        id: 10,
        category: 'Personal Projects',
        projectName: 'Backflip Master (2020)',
        description: '',
        projectImages: []
    },
    {
        id: 9,
        category: 'Personal Projects',
        projectName: 'PBAB - Physics Based Arena Brawler (2018)',
        description: 'My first large project. A top-down physics based arena brawler, which was very fun to build and focused on unique mouse controlled gameplay. It taught me a lot about scope and planning. Unity C#',
        projectImages: ['assets/images/projects/pbab.png']
    },
    // https://www.youtube.com/watch?v=QSO4xjtzOl4
];

export default projectData;
