/**
 * Vite 配置文件
 * 配置项目的构建选项、插件和开发服务器设置
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // 使用 React 插件支持 React 组件
  plugins: [react()],
  // 开发服务器配置
  server: {
    port: 3000,          // 开发服务器端口号
    open: true,          // 自动打开浏览器
    host: true,          // 绑定到所有网络接口
  },
  // 构建配置
  build: {
    outDir: 'dist',           // 输出目录
    sourcemap: true,          // 生成源映射用于调试
    // 使用 esbuild 进行代码压缩（Vite 5 默认）
    minify: 'esbuild',
  },
});
