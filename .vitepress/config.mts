import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',
  srcExclude: ['**/README.md', '**/TODO.md'],
  title: "胡说八道",
  description: "胡说八道 如有雷同 不胜荣幸",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/quxiangshun/nonsense' }
    ],

    footer: {
      copyright: `Copyright © 2024-${new Date().getFullYear()} Evan You`
    }
  }
})
