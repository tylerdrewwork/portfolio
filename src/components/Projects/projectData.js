// projectImages: string (URL) or { src, caption?, offsetX?, offsetY? }. caption supports HTML (e.g. <br/>, <a href="...">). offsetX/offsetY (default 0) set object-position % in gallery tile only.
// In projectImages you can add YouTube as a tile: { type: 'youtube', youtubeId: 'VIDEO_ID' or full URL, caption: '...', offsetX?, offsetY?, timestamp? }. offsetX/offsetY set thumbnail crop. timestamp = start time in seconds (e.g. 90 = 1:30).
// description: supports HTML (e.g. <br /> for line breaks).
// albert-updates: https://discord.gg/aTun9jkFnB
const projectData = [
    {
        id: 2,
        category: 'aiw',
        projectName: 'Mechanics & Tools',
        description: 'I created all of the agent\'s abilities and the video\'s mechanics that you see in the videos, along with the tooling and systems you don\'t see in the videos! I\'m very proud of the work I did here. <br /><br />Tooling was made for the Game Development and Machine Learning teams on request and sometimes proactively if they agreed it would be helpful.',
        projectImages: [
            { src: 'assets/images/projects/ai-warehouse/videos/muscle humanoid.mp4', caption: 'Agent muscle system, using realistic muscle simulation to move the agents more realistically.' },
            { src: 'assets/images/projects/ai-warehouse/gifs/agent muscles motion.gif', caption: 'Agent muscle motion' },
            { src: 'assets/images/projects/ai-warehouse/gifs/muscles.gif', caption: 'Testing the rotational constraints on the agent muscles (not muscle system)' },
            { src: 'assets/images/projects/ai-warehouse/videos/building mechanics soccer.mp4', caption: 'ABILITIES: Here you can see the soccer mechanics and agent using their kick and movement abilities. The ability system drastically improved the speed at which we could build new mechanics.', offsetX: 75, offsetY: 0 },
            { src: 'assets/images/projects/ai-warehouse/gifs/bike.gif', caption: 'Building the very complicated and hilarious bicycle mechanics', offsetX: 0, offsetY: 0 },
            { src: 'assets/images/projects/ai-warehouse/odin validator.png', caption: 'Odin Validator. Built validations to find and squash bugs in the scenes & assets quickly.' },
            
            
        ]
    },
    {
        id: 2,
        category: 'aiw',
        projectName: 'Systems',
        description: 'Systems were made to help the Game Development team build environments faster and more efficiently. There were also many other systems created to fulfill the needs of the current production (video).',
        projectImages: [
            { src: 'assets/images/projects/ai-warehouse/videos/using replay system.mp4', caption: 'REPLAY SYSTEM: Full support for recording and replaying state of objects in scene. With optimizations for performance and storage. Here I am using the replay system to record and replay the state of objects in the scene.' },
            { src: 'assets/images/projects/ai-warehouse/replaydata.png', caption: 'Example of the scriptable object used to store replay data.' },
            { src: 'assets/images/projects/ai-warehouse/roomphases.png', caption: 'ROOM PHASES SYSTEM: My first project here, this large and complex observer system allowed us to create more complex environments by using events that are raised based on the room phase.' },
            { src: 'assets/images/projects/ai-warehouse/documentation.png', caption: 'DOCUMENTATION: Maintained the documentation of our systems, here\'s an example.' },
        ]
    },
    {
        id: 1,
        category: 'aiw',
        projectName: 'Humanoid Agents',
        description: 'Created all of the agent\'s rigs for AI Warehouse, as well as the agent\'s abilities and modules. Also made improvements to the Unity ML-Agents library that made working with the agents much easier for the ML team. <br /><br /> Adding the foundation for Agent abilities was one of the biggest improvements, since it made creating new agents with new mechanics much easier!',
        projectImages: [
            { type: 'youtube', youtubeId: 'hCmrMOzx5VA', caption: 'Example video showing off the agents in action!', offsetX: 30, offsetY: 0, timestamp: 589 },
            { src: 'assets/images/projects/ai-warehouse/tooling-1.png', caption: 'Tooling to help debug during agent creation. Helps solve a lot of issues around Unity\'s joint constraints.' },
            { src: 'assets/images/projects/ai-warehouse/tooling-2.png', caption: 'Showing off more of the Humanoid Builder. You can also see the custom tools and gizmos as well as a master debug panel on the left side.' },
            { src: 'assets/images/projects/ai-warehouse/agent-horse.png', caption: 'Horse Agent' },
            { src: 'assets/images/projects/ai-warehouse/agent-pip.png', caption: 'Pip! I love him. Nothing too special about him. He\'s just very cute.' },
        ],
    },
    {
        id: 4,
        category: 'aiw',
        projectName: 'AI Warehouse Community & Games!',
        description: '<a href="https://aiwarehouse.itch.io/maze" target="_blank">CLICK TO GO TO THE AI WAREHOUSE MAZE GAME PAGE.</a> <b>Password is albert4ever</b>. </br> Took the initiative to grow an active Discord community of 19k total members through consistent updates and direct community engagement.',
        projectImages: [
            { src: 'public/assets/images/projects/ai-warehouse/alsim.png', caption: 'Helped direct a 2D AI Simulator collaboration with University of Toronto MIST. Here we are testing the agents in the AI Simulator.', offsetX: 75, offsetY: 0 },
            { src: 'assets/images/projects/ai-warehouse/maze-game-analytics.png', caption: 'Escape The Maze analytics', offsetX: 0, offsetY: 0 },
            { src: 'assets/images/projects/ai-warehouse/game1.png', caption: 'Escape The Maze lava' },
            { src: 'assets/images/projects/ai-warehouse/game2.png', caption: 'Escape The Maze spikes' },
            { src: 'assets/images/projects/ai-warehouse/aiw community banner.png', caption: 'Community Banner for email blasts made out of user fan-art', offsetX: 10, offsetY: 0 },
            { src: 'assets/images/projects/ai-warehouse/discord_updates.png', caption: 'Growing the community through engagement!' },
            { src: 'assets/images/projects/ai-warehouse/maze community.png', caption: 'People speedrunning Escape The Maze!' },
        ]
    },
    {
        id: 6,
        category: 'Other Professional',
        projectName: 'WipeRecord: SalesForce-Stripe Connector',
        description: 'Lead of this project. Bi-directional connector which synced SalesForce and Stripe accounts and orders. Saved us tens of thousands of dollars per year by eliminating the need for a third party service. Built with JS, Node and Apex. ',
        projectImages: []
    },
    {
        id: 6,
        category: 'Other Professional',
        projectName: 'WipeRecord: Expungement Eligibility Test',
        description: 'First project I worked on at WipeRecord. Refactored a complicated and intertwined logic tree that had hundreds of nested if statements and user ending points to be more maintainable and easier to understand. Built in Javascript, Node.js.',
        projectImages: []
    },
    {
        id: 6,
        category: 'Other Professional',
        projectName: 'Project Motion: Intent Inference',
        description: 'Experimented with and built Unity 3D components that predicted user intention by compositing "human confidence values". No ML, just data collection and processing. First professional position after graduating from UT Austin bootcamp. NDA.',
        projectImages: []
    },
    {
        id: 7,
        category: 'Personal Projects',
        projectName: 'Ski Stunt Simulator (in development)',
        description: 'My ultimate passion project based on an old game from the early 2000s. After being inspired by the game, I reached out to the original creator and UBC Professor Michiel van de Panne, who graciously gave me permission to build a modern version of the game based on the screenshots and videos I sent him. Articulated ragdoll physics, PID controllers, level design. Built in Unity C#.',
        projectImages: [
            { src: 'assets/images/projects/skistunt1.png', caption: 'Skiing down a slope' },
            { src: 'assets/images/projects/skistunt2.png', caption: 'Flip over a crate' },
            { src: 'assets/images/projects/skistunt_flip.gif', caption: 'Testing flips & mouse control' },
        ]
    },
    {
        id: 10,
        category: 'Personal Projects',
        projectName: 'Backflip Master (2020)',
        description: 'A simple game where you try to backflip as far as possible. Shelved it during the pandemic but I\'d like to bring it back to life some day! Built in Unity C#.',
        projectImages: [
            { src: 'assets/images/projects/backflipmaster1.mp4', caption: 'testing flips and landing', offsetX: 50, offsetY: 0 },
            { src: 'assets/images/projects/backflipmaster2.mp4', caption: 'testing ragdoll physics', offsetX: 50, offsetY: 0 },
        ]
    },
    {
        id: 9,
        category: 'Personal Projects',
        projectName: 'PBAB - Physics Based Arena Brawler (2018)',
        description: 'My first large project. A top-down physics based arena brawler, which was very fun to build and focused on unique mouse controlled gameplay. It taught me a lot about scope and planning. Built in Unity C#.',
        projectImages: [
            { src: 'assets/images/projects/pbab.png', caption: 'Training Area' },
            { type: 'youtube', youtubeId: 'iwSDHCeKnDw', caption: 'PBAB Demo Trailer' },
        ]
    },
    {
        id: 8,
        category: 'Personal Projects',
        projectName: 'Game Jams',
        description: '',
        projectImages: [
            { src: 'assets/images/projects/moneyglitch.gif', caption: 'Infinity Money Glitch (GMTK 2025)', offsetX: 50, offsetY: 0 },
            { type: 'youtube', youtubeId: 'S3t4doUekRk', caption: 'Unboxing Simulator (GMTK 2022)', offsetX: 50, offsetY: 0 },
            { src: 'assets/images/projects/meteor.png', caption: 'Meteor (GMTK 2021)', offsetX: 50, offsetY: 0 },
            { src: 'assets/images/projects/deepcore.jpg', caption: 'Deepcore (SCREAM LITE 2020)', offsetX: 0, offsetY: 0 },
        ]
    },
    {
        id: 8,
        category: '... Other Things',
        projectName: 'Tutorials & Talks',
        description: '',
        projectImages: [
            { type: 'youtube', youtubeId: 'QSO4xjtzOl4', caption: 'Icon Kino, a coding tutorial channel I would like to continue in the future', offsetX: 10, offsetY: 0 },
            { src: 'assets/images/projects/utmist.png', caption: 'Keynote speaker at UTMIST\'s AI Squared 2024 and 2025. <br/><a href="https://www.utmist.ca/" target="_blank">Click here to visit their website</a>', offsetX: 5, offsetY: 0 },
            { src: 'assets/images/projects/tutoring.png', caption: 'Tutoring C# and Game Development both in person and online for 4 years. 5 stars on Wyzant!', offsetX: 5, offsetY: 0 },
        ]
    },
    // https://www.youtube.com/watch?v=QSO4xjtzOl4
];

export default projectData;
