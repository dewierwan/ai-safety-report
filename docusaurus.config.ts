import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'International AI Safety Report 2025',
  tagline: 'The International Scientific Report on the Safety of Advanced AI',
  favicon: 'img/ai-action-summit-icon.png',

  // Set the production url of your site here
  url: 'https://dewierwan.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ai-safety-report/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dewierwan', // Your GitHub username
  projectName: 'ai-safety-report', // Your repository name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',  // Make docs the landing page
          // Remove editUrl if you don't want "Edit this page" links
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Update the social card image
    image: 'img/ai-action-summit.png',
    navbar: {
      title: 'State of AI Safety',
      logo: {
        alt: 'AI Action Summit Logo',
        src: 'img/ai-action-summit-icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Report',
        },
        {
          href: 'https://github.com/dewierwan/ai-safety-report',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Report',
          items: [
            {
              label: 'Summary',
              to: '/executive-summary/',
            },
            {
              label: 'Key Findings',
              to: '/findings',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dewierwan/ai-safety-report',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} International AI Safety Report.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
