/**
 * 语言切换上下文和 Hook
 *
 * 这个文件提供 React 上下文来管理应用的语言设置（中文/英文）
 * 使用 React Context API 实现全局状态管理
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 导入中英文语言包
import * as zh from '../locales/zh';
import * as en from '../locales/en';

/**
 * 语言类型定义
 */
type Language = 'zh' | 'en';

/**
 * 语言上下文接口
 */
interface LanguageContextType {
  // 当前语言
  language: Language;
  // 语言包对象（包含所有翻译）
  t: typeof zh | typeof en;
  // 切换语言函数
  setLanguage: (lang: Language) => void;
}

// 创建语言上下文，初始值为 undefined
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * 语言提供者组件
 *
 * @param children - 子组件
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  // 从本地存储获取保存的语言设置，默认为中文
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'zh';
  });

  // 根据当前语言选择对应的语言包
  const t = language === 'zh' ? zh : en;

  /**
   * 切换语言
   * @param lang - 目标语言
   */
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // 保存到本地存储
    localStorage.setItem('language', lang);
  };

  // 监听系统语言设置变化
  useEffect(() => {
    // 如果用户还没有手动设置过语言，尝试根据系统语言设置
    if (!localStorage.getItem('language')) {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('zh')) {
        setLanguageState('zh');
      } else if (browserLang.startsWith('en')) {
        setLanguageState('en');
      }
    }
  }, []);

  // 暴露上下文值给子组件
  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * 使用语言上下文
 *
 * @returns 语言上下文对象
 * @throws 如果在 Provider 外使用则抛出错误
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage 必须在 LanguageProvider 内部使用');
  }
  return context;
}

/**
 * 导出语言类型供其他地方使用
 */
export type { Language };
