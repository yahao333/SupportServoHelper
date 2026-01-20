/**
 * Documentation 组件 - 文档页面
 *
 * 显示安装指南、快速入门和常见问题
 */

import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

/**
 * 文档页面组件
 */
export default function Documentation() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('installation');

  // 文档部分配置
  const sections = [
    { id: 'installation', label: t.docs.sidebar.installation },
    { id: 'quickStart', label: t.docs.sidebar.quickStart },
    { id: 'faq', label: t.docs.sidebar.troubleshooting },
  ];

  return (
    <div className="animate-fade-in">
      {/* ========================================
          页面标题
          ======================================== */}
      <section className="bg-neutral-50 dark:bg-neutral-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {t.docs.title}
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400">
            {t.docs.subtitle}
          </p>
        </div>
      </section>

      {/* ========================================
          文档内容
          ======================================== */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* ========================================
                侧边栏导航
                ======================================== */}
            <aside className="lg:w-64 flex-shrink-0">
              <nav className="lg:sticky lg:top-24 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-500'
                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* ========================================
                内容区域
                ======================================== */}
            <main className="flex-1 min-w-0">
              {/* 安装指南 */}
              {activeSection === 'installation' && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                      {t.docs.installation.title}
                    </h2>

                    {/* Windows */}
                    <div className="card">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4 flex items-center">
                        <span className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center mr-3 text-lg font-bold">
                          W
                        </span>
                        {t.docs.installation.windows.title}
                      </h3>
                      <ol className="space-y-3">
                        {t.docs.installation.windows.steps.map((step: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                              {index + 1}
                            </span>
                            <span className="text-neutral-600 dark:text-neutral-300">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              )}

              {/* 快速入门 */}
              {activeSection === 'quickStart' && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                      {t.docs.quickStart.title}
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                      {t.docs.quickStart.intro}
                    </p>

                    {/* 软件界面截图 */}
                    <div className="card overflow-hidden mb-8">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                        软件主界面
                      </h3>
                      <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
                        <img
                          src="/screenshot.png"
                          alt="ServoHelper 软件界面"
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                        软件界面包含串口连接、舵机列表和参数控制面板。通过左上角的串口选择框连接设备，
                        中间列表显示已连接的舵机，右侧可设置目标位置、速度等参数。
                      </p>
                    </div>

                    {/* 步骤 1 */}
                    <div className="card mb-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center font-bold mr-4">
                          1
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                            {t.docs.quickStart.step1.title}
                          </h3>
                          <p className="text-neutral-600 dark:text-neutral-300">
                            {t.docs.quickStart.step1.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 步骤 2 */}
                    <div className="card mb-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center font-bold mr-4">
                          2
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                            {t.docs.quickStart.step2.title}
                          </h3>
                          <p className="text-neutral-600 dark:text-neutral-300">
                            {t.docs.quickStart.step2.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 步骤 3 */}
                    <div className="card mb-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center font-bold mr-4">
                          3
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                            {t.docs.quickStart.step3.title}
                          </h3>
                          <p className="text-neutral-600 dark:text-neutral-300">
                            {t.docs.quickStart.step3.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 步骤 4 */}
                    <div className="card">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center font-bold mr-4">
                          4
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                            {t.docs.quickStart.step4.title}
                          </h3>
                          <p className="text-neutral-600 dark:text-neutral-300">
                            {t.docs.quickStart.step4.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 常见问题 */}
              {activeSection === 'faq' && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                    {t.docs.faq.title}
                  </h2>

                  {t.docs.faq.items.map((item, index) => (
                    <details
                      key={index}
                      className="card group"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h3 className="text-lg font-medium text-neutral-900 dark:text-white pr-4">
                          {item.question}
                        </h3>
                        <svg
                          className="w-5 h-5 text-neutral-400 transition-transform group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
