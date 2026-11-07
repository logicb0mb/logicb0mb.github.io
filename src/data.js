import project1 from './assets/img/project-1.jpg';
import project2 from './assets/img/project-2.jpg';
import project3 from './assets/img/project-3.jpg';
import project4 from './assets/img/project-4.png';
import project5 from './assets/img/project-5.jpg';
import project6 from './assets/img/project-6.png';

export const resumeUrl = `${import.meta.env.BASE_URL}assets/Resume.pdf`;

export const contacts = [
    {
        label: 'Gmail',
        icon: 'gmail',
        text: 'ss3259@cornell.edu',
        href: 'mailto:ss3259@cornell.edu',
    },
    {
        label: 'Phone',
        icon: 'phone',
        text: '+91-9131610148',
        href: 'tel:+919131610148',
    },
];

export const skillGroups = [
    {
        title: 'FrontEnd Development',
        icon: 'code',
        items: [
            'React.JS',
            'Next.JS',
            'Tailwind',
            'Shadcn UI',
            'Rechart',
            'Material UI',
            'Tanstack Query',
            'HTML',
        ],
    },
    {
        title: 'BackEnd Development',
        icon: 'terminal',
        items: [
            'Node.JS',
            'Express',
            'MongoDB',
            'Prisma',
            'SQL',
            'REST APIs',
            'Stripe',
            'Clerk',
        ],
    },
    {
        title: 'Programming & Tools',
        icon: 'devto',
        items: [
            'Python',
            'Git',
            'GitHub',
            'Postman',
            'Puppeteer',
            'Cheerio',
            'React-Native',
            'React-Flow',
        ],
    },
];

export const story = {
    intro: 'I am a,',
    role: 'Software Developer',
    roleEmoji: '👩‍💻',
    text: 'I completed my Masters of Engineering in Computer Science, from Cornell University, Ithaca NY.',
    textEmoji: '🎓',
    memeCaption: "Here's a cliché React meme for you:",
    githubUrl: 'https://github.com/logicb0mb',
};

export const projects = [
    {
        name: 'ScrapeVision',
        sup: '',
        image: project4,
        github: 'https://github.com/logicb0mb/scrape-vision',
        tech: [
            { icon: 'next', label: 'Next.JS' },
            { icon: 'typescript', label: 'TypeScript' },
            { icon: 'tailwind', label: 'Tailwind' },
            { icon: 'prisma', label: 'Prisma' },
        ],
    },
    {
        name: 'Recorrido',
        image: project1,
        github: 'https://github.com/logicb0mb/Recorrido_App',
        tech: [
            { icon: 'node', label: 'Node.JS' },
            { icon: 'mongodb', label: 'MongoDB' },
            { icon: 'stripe', label: 'Stripe' },
            { icon: 'pug', label: 'PugJS' },
        ],
    },
    {
        name: 'Cores-Paleta',
        image: project2,
        github: 'https://github.com/logicb0mb/cores-paleta',
        tech: [
            { icon: 'react', label: 'React.JS' },
            { icon: 'mui', label: 'Material UI' },
            { icon: 'javascript', label: 'Chroma.js' },
            { icon: 'netlify', label: 'Netlify' },
        ],
    },
    {
        name: 'Review Board: Comment on Commit-Message',
        image: project6,
        github: 'https://www.cs.cornell.edu/courses/cs5150/2022sp/projects/setup-reviewboard.html',
        tech: [
            { icon: 'backbone', label: 'Backbone.JS' },
            { icon: 'jasmine', label: 'Jasmine.JS' },
            { icon: 'csswizardry', label: 'CSS' },
            { icon: 'html5', label: 'HTML' },
        ],
    },
    {
        name: 'Forkify',
        image: project3,
        github: 'https://github.com/logicb0mb/Forkify',
        tech: [
            { icon: 'javascript', label: 'JavaScript' },
            { icon: 'sass', label: 'SASS' },
            { icon: 'html5', label: 'HTML' },
        ],
    },
    {
        name: 'Yahtzee',
        image: project5,
        github: 'https://github.com/logicb0mb/Yahtzee',
        tech: [
            { icon: 'react', label: 'React.JS' },
            { icon: 'csswizardry', label: 'CSS' },
            { icon: 'html5', label: 'HTML' },
        ],
    },
];

export const navLinks = [
    { label: 'GitHub', href: 'https://github.com/logicb0mb' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shreyasshukla16' },
    { label: 'EMail', href: 'mailto:shreyas.shukla26@gmail.com' },
    { label: 'Contact ', href: 'tel:+919131610148' },
];
