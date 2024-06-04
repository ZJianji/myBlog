import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: "VitePress",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
       // 当用户位于 `guide` 目录时，会显示此侧边栏
       '/guide/': [
        {
          text: '文章',
          items: [
            { text: 'Git的基本命令', link: '/guide/' },
            // { text: 'One', link: '/guide/one' },
            // { text: 'Two', link: '/guide/two' }
          ]
        }
      ],
    }

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
