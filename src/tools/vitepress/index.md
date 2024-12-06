---
outline: deep
---

# Vitepress搭建一个文档网站

我们今天使用vitepress（[Vitepress官网](https://vitepress.dev/guide/getting-started)）搭建一个默认的博客网站

## 安装vitepress
新建文件夹nonsense，打开cmd窗口
```shell
pnpm add -D vitepress
```
## 初始化
```shell
pnpm vitepress init
```
我们将会看到下面内容：
```text
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◆  Theme:
│  ● Default Theme (Out of the box, good-looking docs)
│  ○ Default Theme + Customization
│  ○ Custom Theme
│
◇  Use TypeScript for config and theme files?
│    Yes / No
└
```
* Where should VitePress initialize the config? 配置文件初始化的位置，此处我们初始化在当前文件夹下；
* Site title: 站点标题
* Site description: 站点描述（SEO使用）
* Theme: 我一般选择第二个
* 是否使用ts

## 自定义配置

### 美化主页

- 更改logo、title、nav等

更改`.vitepress/config.mts`文件
```ts
export default defineConfig({
  // 配置源代码位置
  srcDir: 'src',
  // 排除文件
  srcExclude: ['**/README.md', '**/TODO.md'],
  // 左上角标题
  title: "胡说八道",
  description: "胡说八道 如有雷同 不胜荣幸",
  themeConfig: {
    // 左上角logo
    logo: 'logo.png',
    // 菜单
    nav: [
      { text: '栾媛', link: '/' },
      {
        text: '胡说',
        items: [
          { text: 'Vitepress', link: '/talk/enflame/vitepress' },
          { text: '复用性', link: '/talk/enflame/efdm/index' },
          { text: '扩展性', link: '/talk/enflame/api-examples' }
        ]
      },
      {
        text: '工具',
        items: [
          { text: 'Vitepress', link: '/tools/vitepress' }
        ]
      }
    ],
    // 进入页面后左边菜单
    sidebar: [
      {
        text: '胡说',
        items: [
          { text: '复用性', link: '/talk/enflame/efdm/index' },
          { text: '111', link: '/talk/enflame/markdown-examples' },
          { text: '扩展性', link: '/talk/enflame/api-examples' }
        ]
      },
      {
        text: '工具',
        items: [
          { text: 'Vitepress', link: '/tools/vitepress' }
        ]
      }
    ],
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/quxiangshun/nonsense' }
    ],
    // 版权
    footer: {
      copyright: `Copyright © 2024-${new Date().getFullYear()} Evan You`
    }
  }
})
```

- 主页扩展

更改`index.md`，默认在跟目录，因为修改了`srcDir`，所以查找的是`${srcDir}/index.md`

```md
---
layout: home

hero:
  name: "胡说八道"
  text: ""
  tagline: 胡说八道 如有雷同 不胜荣幸
  image: 
    src: logo.png
    alt: 背景图片
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
```

- `---`是vitepress的特殊语法：通常具有特定的含义和用途，主要用于Markdown文件的配置和分隔。
- 其他属性配置[参考链接](https://vitepress.dev/zh/reference/default-theme-home-page)
