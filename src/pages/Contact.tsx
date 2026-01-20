/**
 * Contact 组件 - 联系页面
 *
 * 显示联系信息
 */

import { useLanguage } from '../hooks/useLanguage';

/**
 * 联系页面组件
 */
export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      {/* ========================================
          页面标题
          ======================================== */}
      <section className="bg-neutral-50 dark:bg-neutral-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {t.contact.title}
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* ========================================
          联系内容
          ======================================== */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* 联系卡片 */}
            <div className="space-y-6">
              {/* 邮箱 */}
              <div className="card flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                    {t.contact.info.email}
                  </h3>
                  <a
                    href="mailto:apprank@outlook.com"
                    className="text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    {t.contact.info.emailValue}
                  </a>
                </div>
              </div>

              {/* 响应时间 */}
              <div className="card flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                    {t.contact.info.responseTime}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {t.contact.info.responseTimeValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
