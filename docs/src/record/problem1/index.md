# vue3项目“@”路径别名引入函数或组件，ctril + 鼠标点击跳转不生效

1. 在项目的目录中创建config.js文件

2. 在config.js中添加如下代码
```md
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}

```
