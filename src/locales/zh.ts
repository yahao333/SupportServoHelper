/**
 * 中文语言包
 * 用于网站的简体中文界面
 */

/**
 * 导航相关文案
 */
export const nav = {
  home: '首页',
  documentation: '文档',
  download: '下载',
  contact: '联系',
};

/**
 * 首页相关文案
 */
export const home = {
  // 英雄区域
  hero: {
    title: 'Servo Tools',
    subtitle: '专业的舵机控制工具软件',
    description: '提供完整的舵机控制解决方案，支持多种舵机协议，简单易用，功能强大。',
    cta: '开始使用',
    viewDocs: '查看文档',
  },

  // 特性介绍
  features: {
    title: '主要特性',
    items: [
      {
        title: '多协议支持',
        description: '支持 PPM、PWM、Serial Bus 等多种舵机通信协议，兼容主流舵机品牌。',
      },
      {
        title: '图形化界面',
        description: '直观的图形用户界面，通过拖拽即可完成舵机配置和调试。',
      },
      {
        title: '批量操作',
        description: '支持批量配置多个舵机，提高工作效率，节省调试时间。',
      },
      {
        title: '实时监控',
        description: '实时显示舵机状态和参数变化，方便问题诊断和性能优化。',
      },
    ],
  },

  // 下载区域
  download: {
    title: '立即下载',
    subtitle: '适用于 Windows 10/11 系统',
    windows: 'Windows',
    macOS: 'macOS',
    linux: 'Linux',
    version: '版本',
    size: '大小',
    releaseDate: '发布日期',
    notes: '更新说明',
  },

  // CTA 区域
  cta: {
    title: '准备好开始了吗？',
    description: '下载最新版本，体验强大的舵机控制功能。',
    button: '立即下载',
  },
};

/**
 * 文档页面相关文案
 */
export const docs = {
  title: '文档中心',
  subtitle: '完整的操作指南和 API 参考',

  // 侧边栏
  sidebar: {
    gettingStarted: '快速开始',
    installation: '安装指南',
    quickStart: '快速入门',
    configuration: '配置说明',
    advanced: '高级功能',
    api: 'API 参考',
    examples: '示例代码',
    troubleshooting: '常见问题',
  },

  // 安装指南
  installation: {
    title: '安装指南',
    windows: {
      title: 'Windows 系统',
      steps: [
        '下载 Windows 安装包（.exe 文件）',
        '双击安装文件启动安装向导',
        '选择安装目录（建议使用默认目录）',
        '等待安装完成，点击完成按钮',
        '从桌面快捷方式或开始菜单启动软件',
      ],
    },
  },

  // 快速入门
  quickStart: {
    title: '快速入门',
    intro: '本指南将帮助您快速上手 Servo Tools 软件。',
    step1: {
      title: '连接舵机',
      description: '使用 USB 数据线将舵机连接到电脑。软件会自动识别已连接的设备。',
    },
    step2: {
      title: '选择舵机类型',
      description: '在软件界面中选择您使用的舵机类型，或让软件自动检测。',
    },
    step3: {
      title: '配置参数',
      description: '设置舵机的目标角度、速度和其他参数。',
    },
    step4: {
      title: '测试运行',
      description: '点击运行按钮测试舵机是否正常工作。',
    },
  },

  // 常见问题
  faq: {
    title: '常见问题',
    items: [
      {
        question: '软件无法识别连接的舵机怎么办？',
        answer: '请检查 USB 连接是否正常，尝试更换 USB 接口或数据线。确保已安装正确的驱动程序。',
      },
      {
        question: '如何更新软件到最新版本？',
        answer: '访问官网下载页面，获取最新版本安装包。安装新版本时建议先卸载旧版本。',
      },
      {
        question: '支持哪些舵机型号？',
        answer: '软件支持市面上主流的舵机品牌和型号，包括 Futaba、HiTEC、Robbe 等。具体兼容性请参考文档。',
      },
      {
        question: '软件是否支持批量控制？',
        answer: '是的，软件支持同时连接和控制多个舵机。您可以在设备列表中添加多个舵机进行批量操作。',
      },
    ],
  },
};

/**
 * 联系页面相关文案
 */
export const contact = {
  title: '联系我们',
  subtitle: '有任何问题或建议，请通过以下方式联系我们',

  info: {
    email: '电子邮箱',
    emailValue: 'apprank@outlook.com',
    responseTime: '响应时间',
    responseTimeValue: '工作日 48 小时内',
  },

  form: {
    name: '您的姓名',
    email: '电子邮箱',
    subject: '主题',
    message: '留言内容',
    submit: '发送消息',
    sending: '发送中...',
    success: '消息已发送，我们会尽快回复您！',
    error: '发送失败，请稍后重试或直接发送邮件。',
    placeholder: {
      name: '请输入您的姓名',
      email: '请输入您的邮箱',
      subject: '请输入邮件主题',
      message: '请输入您要发送的内容...',
    },
  },

  // 底部信息
  footer: {
    copyright: 'All rights reserved.',
  },
};

/**
 * 通用文案
 */
export const common = {
  language: '语言',
  darkMode: '深色模式',
  lightMode: '浅色模式',
  loading: '加载中...',
  error: '出错了',
  retry: '重试',
  learnMore: '了解更多',
  back: '返回',
  next: '下一步',
  previous: '上一步',
};
