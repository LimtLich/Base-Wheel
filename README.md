## Nuxt-CMS

#### nuxt ssr 服务端渲染，PWA渐进式WebApp应用

``` bash
# 开发模式
yarn 
yarn dev

# 部署UAT环境
yarn build:uat
pm2 start --env uat

# 部署生产环境
yarn build:production
pm2 start --env production

# 更新
pm2 reload ecosystem.config.js --env ENVIROMENT
```


