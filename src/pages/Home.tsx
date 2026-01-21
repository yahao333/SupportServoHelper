/**
 * Home 组件 - 首页
 *
 * 显示软件介绍、特性、下载链接等
 */

import { useLanguage } from '../hooks/useLanguage';

/**
 * 首页组件
 */
export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      {/* ========================================
          英雄区域 (Hero Section)
          ======================================== */}
      <section className="relative bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-900 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* 主标题 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              {t.home.hero.title}
            </h1>
            {/* 副标题 */}
            <h2 className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8">
              {t.home.hero.subtitle}
            </h2>
            {/* 描述 */}
            <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
              {t.home.hero.description}
            </p>
            {/* 行动按钮 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#download"
                className="inline-flex items-center px-8 py-3
                           bg-primary-500 text-white font-semibold rounded-lg
                           hover:bg-primary-600
                           transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t.home.hero.cta}
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="/docs"
                className="inline-flex items-center px-8 py-3
                           border-2 border-neutral-300 dark:border-neutral-700
                           text-neutral-700 dark:text-neutral-300 font-semibold rounded-lg
                           hover:border-primary-500 hover:text-primary-500
                           transition-all duration-200"
              >
                {t.home.hero.viewDocs}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          特性区域 (Features Section)
          ======================================== */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              {t.home.features.title}
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          {/* 特性卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.home.features.items.map((feature, index) => (
              <div
                key={index}
                className="card hover:shadow-lg transition-shadow duration-300"
              >
                {/* 特性图标 */}
                <div className="w-12 h-12 mb-4 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {index === 0 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    )}
                    {index === 1 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                      />
                    )}
                    {index === 2 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    )}
                    {index === 3 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    )}
                  </svg>
                </div>
                {/* 特性标题 */}
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                {/* 特性描述 */}
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          下载区域 (Download Section)
          ======================================== */}
      <section id="download" className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              {t.home.download.title}
            </h2>
            <p className="text-lg text-neutral-500 dark:text-neutral-400">
              {t.home.download.subtitle}
            </p>
          </div>

          {/* 下载卡片 */}
          <div className="max-w-md mx-auto">
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0V3.449zm10.949-1.649L24 0v11.4H10.949V1.8zm-10.949 11.1l9.75 1.35v9.601H0V12.9zm10.949 1.5l13.051 1.8v10.951l-13.051-1.8V14.4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
                {t.home.download.windows}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 mb-6">
                Windows 10 / Windows 11
              </p>
              <a
                href="https://github.com/yahao333/SupportServoHelper/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors text-center"
              >
                {t.home.hero.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          CTA 区域 (Call to Action)
          ======================================== */}
      <section className="py-20 bg-primary-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.home.cta.title}
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            {t.home.cta.description}
          </p>
          <a
            href="https://github.com/yahao333/SupportServoHelper/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4
                       bg-white text-primary-500 font-semibold rounded-lg
                       hover:bg-primary-50
                       transition-all duration-200 shadow-lg"
          >
            {t.home.cta.button}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
