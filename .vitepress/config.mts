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
    outlineTitle: "文章目录",
    outline: [2, 6], // 索引的标题层级
    aside: "left", // 设置右部侧边栏左边显示
    nav: [
      { text: '栾媛', link: '/' },
      {
        text: '胡说',
        items: [
          { text: '编程思想', link: '/talk/enflame/efdm/index' },
          { text: 'Java那点事', link: '/talk/enflame/api-examples' },
          { text: 'Vue3', link: '/talk/enflame/api-examples' },
        ]
      },
      {
        text: '工具',
        items: [
          { text: 'Vitepress', link: '/tools/vitepress' }
        ]
      }
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/quxiangshun/nonsense' }
    ],

    footer: {
      copyright: `Copyright © 2024-${new Date().getFullYear()} Evan You`
    }
  }
})
