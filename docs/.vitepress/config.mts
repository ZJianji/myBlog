import { defineConfig } from 'vitepress'
import mdItCustomAttrs  from 'markdown-it-custom-attrs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: "破壁而出的马里奥",
  description: "A VitePress Site",

  head: [
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    /* 右边导航 */
    nav: [
      { text: 'Home', link: '/' },
    ],

    /* 侧边栏 */
    sidebar: {
       // 当用户位于 `guide` 目录时，会显示此侧边栏
       '/guide/': [
        {
          text: '文章',
          items: [
            { text: '从0-1部署web项目（华为云）', link: '/guide/' },
            { text: 'jenkins自动化部署web项目', link: '/guide/jenkins' },
          ]
        }
      ],
    },

    search: {
      provider: 'local'
    }

    /* 社交链接 */
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },

  /* 设置最后更新时间 */
  lastUpdated: true,

  /* 设置图片预览 */
  markdown:{
    config: (md) => {
        // use more markdown-it plugins!
        md.use(mdItCustomAttrs, 'image', {
            'data-fancybox': "gallery"
        })
        }
   },
})
