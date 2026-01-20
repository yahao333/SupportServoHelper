/**
 * 主应用组件
 *
 * 这是应用的根组件，负责：
 * 1. 配置路由
 * 2. 提供全局上下文（语言、主题等）
 * 3. 布局结构
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Contact from './pages/Contact';

/**
 * 布局组件
 * 包含页头、内容区和页脚
 */
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 页头导航 */}
      <Header />
      {/* 主内容区 */}
      <main className="flex-1">
        {children}
      </main>
      {/* 页脚 */}
      <Footer />
    </div>
  );
}

/**
 * 主应用组件
 */
function App() {
  return (
    // 提供语言上下文
    <LanguageProvider>
      {/* 启用路由 */}
      <BrowserRouter>
        <Layout>
          {/* 定义路由规则 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
