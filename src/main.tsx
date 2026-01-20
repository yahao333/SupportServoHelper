/**
 * 应用入口文件
 *
 * 这个文件是 React 应用的起点，负责：
 * 1. 导入根组件并渲染到 DOM
 * 2. 设置全局错误边界
 * 3. 初始化 React StrictMode（开发环境下的额外检查）
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * 获取页面中的根元素
 * 这个元素在 index.html 中定义
 */
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('未找到根元素，请检查 index.html 中的 #root 是否存在');
}

/**
 * 创建 React 根并渲染应用
 * ReactDOM.createRoot 是 React 18 引入的新 API
 * 支持并发渲染和自动批处理优化
 */
ReactDOM.createRoot(rootElement).render(
  // React StrictMode 会在开发模式下检测潜在问题
  // 例如：不安全的生命周期方法、过时的 API 调用等
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
