/**
 * Footer 组件 - 网站底部
 *
 * 显示版权信息、联系方式和社交链接
 */

import { useLanguage } from '../hooks/useLanguage';

/**
 * Footer 组件
 */
export default function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 左侧：品牌信息 */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg
                className="w-6 h-6 text-primary-500"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
              <span className="text-lg font-bold text-neutral-900 dark:text-white">
                ServoHelper
              </span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {t.home.hero.description}
            </p>
          </div>

          {/* 中间：快速链接 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
              快速链接
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="/docs"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  {t.nav.documentation}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* 右侧：联系方式 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
              联系我们
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-neutral-400"
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
                <a
                  href="mailto:apprank@outlook.com"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  apprank@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权行 */}
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
            © {currentYear} SupportServoHelper. {t.contact.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
