/* 该配置文件上线发布后不生效，只在本地生效 */
import { defineConfig } from 'umi';

export default defineConfig({
  // 配置式路由
  // routes: [
  //   { path: "/", component: "index" },
  //   { path: "/docs", component: "docs" },
  // ],
  npmClient: 'npm',
  // hash模式
  // history: {
  //   type: 'hash',
  // },
  // 反向代理
  proxy: {
    '/api': {
      target: 'https://i.maoyan.com',
      changeOrigin: true,
    },
  },
});
