import { AppData } from '../interfaces/app';

export const apps: AppData[] = [
  {
    id: 'create-town',
    title: 'Create . Town',
    description: 'This platform serves as a creative canvas for users to design and build their own virtual towns.',
    image: '/images/apps/ry-os.jpg',
    author: 'Shaoru Ian Huang',
    authorLink: 'https://x.com/shaoruu',
    category: 'Design',
    rating: 4.8,
    releaseDate: 'November 2024',
    link: 'https://create.town/',
    githubUrl: undefined,
    additionalInfo: 'This platform serves as a creative canvas for users to design and build their own virtual towns.<p>It offers tools and features that enable the construction of personalized town layouts, catering to enthusiasts of urban planning, game design, or storytelling.'
  },
  {
    id: 'shadcn-studio',
    title: 'Shadcn Studio',
    description: 'A visual editor for creating and customizing Shadcn UI components with a beautiful drag-and-drop interface.',
    image: '/images/apps/shadcn-studio.jpg',
    author: 'UI Craftsman',
    authorLink: 'https://github.com/shadcn',
    category: 'Design',
    rating: 4.5,
    releaseDate: 'March 2023',
    link: 'https://shadcn-studio.vercel.app',
    githubUrl: 'https://github.com/shadcn/shadcn-studio',
    additionalInfo: 'A comprehensive visual editor for Shadcn UI components featuring real-time preview, code export, and theme customization capabilities.'
  },
  {
    id: 'create-town',
    title: 'Create . Town',
    description: 'This platform serves as a creative canvas for users to design and build their own virtual towns.',
    image: '/images/apps/create-town.jpg',
    author: 'Shaoru Ian Huang',
    authorLink: 'https://x.com/shaoruu',
    category: 'Design',
    rating: 4.8,
    releaseDate: 'November 2024',
    link: 'https://create.town/',
    githubUrl: 'https://github.com/shaoruu/create.town',
    additionalInfo: 'This platform serves as a creative canvas for users to design and build their own virtual towns.<p>It offers tools and features that enable the construction of personalized town layouts, catering to enthusiasts of urban planning, game design, or storytelling.'
  },
  {
    id: 'tailwind-themes',
    title: 'Tailwind Themes',
    description: 'A collection of customizable themes for Tailwind CSS with support for dark/light mode switching.',
    image: '/images/apps/tailwind-themes.jpg',
    author: 'CSS Wizards',
    authorLink: 'https://tailwindcss.com',
    category: 'Design',
    rating: 4.3,
    releaseDate: 'April 2023',
    link: 'https://tailwind-themes.vercel.app',
    githubUrl: 'https://github.com/tailwindlabs/tailwindcss',
    additionalInfo: 'An extensive collection of ready-to-use Tailwind CSS themes with seamless dark/light mode integration and customization options.'
  },
  {
    id: 'api-forge',
    title: 'API Forge',
    description: 'A tool for quickly creating, testing, and documenting RESTful APIs with automatic OpenAPI specification generation.',
    image: '/images/apps/api-forge.jpg',
    author: 'API Guild',
    authorLink: 'https://swagger.io',
    category: 'Development',
    rating: 4.6,
    releaseDate: 'May 2023',
    link: 'https://api-forge.vercel.app',
    githubUrl: 'https://github.com/swagger-api/swagger-ui',
    additionalInfo: 'Streamline your API development workflow with automatic documentation generation, testing tools, and OpenAPI specification support.'
  },
  {
    id: 'devflow',
    title: 'DevFlow',
    description: 'A developer workflow tool that integrates with GitHub, JIRA, and Slack to streamline your development process.',
    image: '/images/apps/devflow.jpg',
    author: 'DevOps Dojo',
    authorLink: 'https://vercel.com',
    category: 'Productivity',
    rating: 4.9,
    releaseDate: 'June 2023',
    link: 'https://devflow.vercel.app',
    githubUrl: 'https://github.com/vercel/vercel',
    additionalInfo: 'Enhance your development workflow with seamless integration between GitHub, JIRA, and Slack, featuring automated task tracking and progress updates.'
  }
];