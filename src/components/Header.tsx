/**
 * Header 组件 - 网站顶部导航栏
 *
 * 显示网站 Logo、主导航链接、语言切换和主题切换
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

/**
 * Header 组件
 */
export default function Header() {
  // 获取当前语言和翻译对象
  const { language, setLanguage, t } = useLanguage();
  // 获取当前路由位置
  const location = useLocation();
  // 移动端菜单展开状态
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * 切换语言
   */
  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  /**
   * 判断链接是否当前激活
   */
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo 区域 */}
          <Link to="/" className="flex items-center space-x-2">
            {/* SVG Logo 图标 */}
            <svg
              className="w-8 h-8 text-primary-500"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 齿轮图标 - 代表工具/机械 */}
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
              <path
                d="M16 8V12M16 20V24M8 16H12M20 16H24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.5 11.5L14 14M18 18L20.5 20.5M11.5 20.5L14 18M18 14L20.5 11.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xl font-bold text-neutral-900 dark:text-white">
              ServoHelper
            </span>
          </Link>

          {/* 桌面端导航 - 在中等及以上屏幕显示 */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* 首页链接 */}
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-primary-500'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-primary-500'
              }`}
            >
              {t.nav.home}
            </Link>
            {/* 文档链接 */}
            <Link
              to="/docs"
              className={`text-sm font-medium transition-colors ${
                isActive('/docs')
                  ? 'text-primary-500'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-primary-500'
              }`}
            >
              {t.nav.documentation}
            </Link>
            {/* 联系链接 */}
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-primary-500'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-primary-500'
              }`}
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* 右侧操作区域 */}
          <div className="flex items-center space-x-4">
            {/* 语言切换按钮 */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg
                         bg-neutral-100 dark:bg-neutral-800
                         text-neutral-700 dark:text-neutral-300
                         text-sm font-medium
                         hover:bg-neutral-200 dark:hover:bg-neutral-700
                         transition-colors"
              aria-label={t.common.language}
            >
              {/* 语言图标 */}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span>{language === 'zh' ? 'EN' : '中文'}</span>
            </button>

            {/* 下载按钮 - 跳转到首页下载区域 */}
            <a
              href="/#download"
              className="hidden sm:inline-flex items-center px-4 py-2
                         bg-primary-500 text-white text-sm font-medium rounded-lg
                         hover:bg-primary-600
                         transition-colors"
            >
              {t.nav.download}
            </a>

            {/* 移动端菜单按钮 - 只在小屏幕显示 */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg
                         text-neutral-600 dark:text-neutral-300
                         hover:bg-neutral-100 dark:hover:bg-neutral-800
                         transition-colors"
              aria-label="菜单"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  // 关闭图标
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // 菜单图标
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端导航菜单 - 默认隐藏 */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/')
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500'
                    : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                {t.nav.home}
              </Link>
              <Link
                to="/docs"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/docs')
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500'
                    : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                {t.nav.documentation}
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/contact')
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500'
                    : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                {t.nav.contact}
              </Link>
              <a
                href="/#download"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-4 py-2
                           bg-primary-500 text-white text-sm font-medium rounded-lg
                           hover:bg-primary-600 transition-colors"
              >
                {t.nav.download}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
