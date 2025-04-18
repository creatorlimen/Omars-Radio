import { AppData } from '../interfaces/app';

export const apps: AppData[] = [
  {
    id: 'code-gpt',
    title: 'Code GPT',
    description: 'AI-powered code assistant that helps developers write, review, and refactor code with intelligent suggestions.',
    image: '/images/apps/code-gpt.jpg',
    author: 'Cursor Team',
    authorImage: '/images/authors/cursor-team.jpg',
    authorLink: 'https://www.cursor.com/',
    category: 'Development',
    rating: 4.8,
    complexity: 3,
    releaseDate: 'January 2023',
    link: 'https://github.com/microsoft/CodeGPT'
  },
  {
    id: 'shadcn-studio',
    title: 'Shadcn Studio',
    description: 'A visual editor for creating and customizing Shadcn UI components with a beautiful drag-and-drop interface.',
    image: '/images/apps/shadcn-studio.jpg',
    author: 'UI Craftsman',
    authorImage: '/images/authors/ui-craftsman.jpg',
    authorLink: 'https://github.com/shadcn',
    category: 'Design',
    rating: 4.5,
    complexity: 2,
    releaseDate: 'March 2023',
    link: 'https://github.com/shadcn-ui/ui'
  },
  {
    id: 'next-auth-dashboard',
    title: 'Next Auth Dashboard',
    description: 'A comprehensive authentication and user management dashboard built with Next.js, Prisma, and NextAuth.js.',
    image: '/images/apps/next-auth-dashboard.jpg',
    author: 'Auth Experts',
    authorImage: '/images/authors/auth-experts.jpg',
    authorLink: 'https://authjs.dev',
    category: 'Authentication',
    rating: 4.7,
    complexity: 4,
    releaseDate: 'February 2023',
    link: 'https://github.com/nextauthjs/next-auth'
  },
  {
    id: 'tailwind-themes',
    title: 'Tailwind Themes',
    description: 'A collection of customizable themes for Tailwind CSS with support for dark/light mode switching.',
    image: '/images/apps/tailwind-themes.jpg',
    author: 'CSS Wizards',
    authorImage: '/images/authors/css-wizards.jpg',
    authorLink: 'https://tailwindcss.com',
    category: 'Design',
    rating: 4.3,
    complexity: 2,
    releaseDate: 'April 2023',
    link: 'https://github.com/tailwindlabs/tailwindcss'
  },
  {
    id: 'api-forge',
    title: 'API Forge',
    description: 'A tool for quickly creating, testing, and documenting RESTful APIs with automatic OpenAPI specification generation.',
    image: '/images/apps/api-forge.jpg',
    author: 'API Guild',
    authorImage: '/images/authors/api-guild.jpg',
    authorLink: 'https://swagger.io',
    category: 'Development',
    rating: 4.6,
    complexity: 3,
    releaseDate: 'May 2023',
    link: 'https://github.com/swagger-api/swagger-ui'
  },
  {
    id: 'devflow',
    title: 'DevFlow',
    description: 'A developer workflow tool that integrates with GitHub, JIRA, and Slack to streamline your development process.',
    image: '/images/apps/devflow.jpg',
    author: 'DevOps Dojo',
    authorImage: '/images/authors/devops-dojo.jpg',
    authorLink: 'https://vercel.com',
    category: 'Productivity',
    rating: 4.9,
    complexity: 4,
    releaseDate: 'June 2023',
    link: 'https://github.com/vercel/vercel'
  }
];