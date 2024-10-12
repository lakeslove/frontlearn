// 全局配置
window.globalConfig = {
  /**
   * 环境配置
   */
  DOMAIN: '', // 域配置，配合 evercloud 使用，将域名中需要变动的部分放在这里，例如：xxx.wh.everark.com.cn，然后在配置地址时使用类似 http://xxx.${DOMAIN} 以便切换环境。当值含有 ip 地址时，将替换整个域名

  /**
   * 基础配置
   */
  defaultProxyPath: './service', // 默认代理路径，开发环境下需要与 vue.config.js 中的代理配置对应，生产环境下需要与 nginx 中的代理配置对应
  requestTimeout: undefined, // 请求超时时间（undefined 表示不做控制），单位毫秒，直接填入数字即可，示例：1000 * 30，表示 30 秒
  showRecommendedBrowser: true, // 显示推荐使用 Chrome 浏览器的提示
  checkPasswordExpire: false, // 检查密码是否过期
  forcePasswordChange: false, // 密码过期时，强制修改密码（无法跳过）
  lockScreenTime: undefined, // 长时间无交互自动锁屏（undefined 或 0 表示不自动锁屏），单位毫秒，直接填入数字即可，示例：1000 * 60 * 10，表示 10 分钟
  iframePreload: true, // 对 iframe 嵌入的第三方应用进行预载（IE除外），当 useTabs 为 false 时，还会进行预渲染
  iframePreloadDelay: 5000, // iframe 页面预载的延迟时间，单位毫秒（因预载开始时可能出现卡顿，请选择合适的时机）
  triggerParentLogout: true, // session 失效时，触发父系统（需基于 evervue）登出
  allowLogoutByIframe: false, // 允许 iframe 嵌入的第三方应用触发当前系统登出
  loginType: '', // sms 短信登录

  // 用户管理中是否隐藏邮箱和手机号
  userManage: {
    hideEmail: true,
    hidePhone: true,
  },

  /**
   * 菜单与权限
   */
  serviceUrl: '/app-security',
  appKey: 'app-security', // 应用关键字，登录时的参数
  showAppSelect: false, // 显示应用切换，开启后总是只显示当前应用下的菜单（无视 showFullMenu 和 showSystemMenu），呈现在引导页的应用才会显示
  appSelectStyle: 1, // 应用切换样式，0 下拉框 | 1 顶部平铺
  showFullMenu: false, // 显示完整菜单，true 将显示该用户在各app（包括系统管理）下所有菜单的组合，false 仅显示当前appKey对应的app下的菜单
  showSystemMenu: true, // 显示系统管理菜单，前提是用户拥有系统管理的菜单权限
  menuStyle: 1, // 菜单样式，0 经典 | 1 右侧展开
  homePageUrl: '', // 默认首页地址（留空时将自动采用第一个菜单页面），支持第三方页面、菜单页面、未配置成菜单的页面，支持 ${ip} 和 ${port} 的转义
  homePageIsGlobal: false, // 默认首页是否全局页面（即没有顶部栏、左侧菜单栏、底部栏），仅当 homePageUrl 非空时生效

  /**
   * 显示与交互
   */
  useTabs: false, // 使用标签形式打开页面
  pageAdaptToWindow: true, // 页面适应窗口，true 页面高度与窗口一致，侧边栏和内容在div内滚动，false 页面自然增长高度
  headerHeight: 50, // 顶部栏高度，单位 px
  mainPadding: 20, // 正文内容内边距（iframe除外），单位 px
  showFooter: false, // 显示底部栏
  asideMenuWidth: 200, // 左侧菜单栏宽度，单位 px
  asideMenuUniqueOpened: true, // 左侧菜单只保持一个子菜单的展开
  asideMenuCollapse: false, // 左侧菜单默认折叠
  themes: [
    // { name: "default", label: "默认主题" },
    // { name: "orange", label: "醒目橙色" },
    { name: 'blue', label: '蓝色海洋' },
    { name: 'light', label: '清新淡雅' },
  ], // 平台主题列表
  theme: 'light', // 初始平台主题（需从主题列表中选择），仅在 localStorage 中没有该值或不显示平台主题切换控件时生效
  siteMenuMode: 'horizontal', // 初始菜单显示位置 vertical（左侧纵向） / horizontal（顶部横向），仅在 localStorage 中没有该值时生效
  showErrorLog: false, // 显示顶部栏异常日志控件
  showChangeTheme: true, // 显示顶部栏平台主题切换控件
  showUserOpt: true, // 显示顶部栏用户操作控件
  pageTitleBreadcrumb: true, // 页面标题栏显示面包屑
  showContentOnlyInIframe: true, // 被 iframe 嵌入时，仅显示内容（被嵌方）
  showContentPageTitleInIframe: true, // 被 iframe 嵌入时，显示内容中的标题（被嵌方）
  showPageTitleInIframe: false, // iframe 页面中显示页面标题（嵌别人）

  /**
   * logo、标题和文字
   * 登录页主标题和副标题都为空时，显示默认图片标题
   */
  loginTitle: 'APP全景态势与案件情报溯源挖掘系统', // 登录页主标题
  loginSubTitle: 'App panoramic situation and case intelligence traceability mining system', // 登录页副标题
  headerLogo: 'favicon.ico', // 顶部栏 logo（相对于 index.html 的路径，示例：logo.png，没有 logo 时留空，注意不要用中文）
  headerTitle: 'APP全景态势与案件情报溯源挖掘系统', // 顶部栏标题（同时会替换网页 title）
  footerInfo: '版权和技术支持', // 底部栏文字

  /**
   * 使用 BI 增强
   */
  useBiCompass: false, // 是否使用罗盘功能，需要bi后台接口支持
  useBiDic: false, // 使用 bi 增强数据字典

  /**
   * 配置通过新窗口打开的应用（在点击应用按钮时触发，后续改为在应用管理中配置）
   */
  newWindowAppKeys: [], // 希望通过新窗口打开的各应用 appKey，示例：['app1', 'app2']
  // appops_server: './app-data-web',
  app_data_web: './app-data-web',

  /**
   * 大屏设置
   */
  dash: {
    // 预览模式
    preview: false,

    // 总屏
    largeScreen: {
      // 大屏名称
      // title: '河南省移动应用程序态势',
      // 右上角时间范围 ['all', 'year', 'month', 'week'] 全部，年，月，日 都显示，哪个不填哪个不显示
      // timeOptions: ['all', 'year', 'month', 'week'],
      // 当前选中时间
      // timeActive: 'all',
      // 是否显示右下角漏洞APP卡片
      // showLeakCard: true,
      // 地图显示类型 全国: china，省: province，市: city
      // mapType: 'province',
      // 比如要设置当前地图显示为河南省，mapType: 'province'，mapActive: '河南省'
      // mapActive: '河南省',
      // 地图是否可以下钻
      // mapDrillDown: false,

      /**
       * 河南管局配置
       */
      // title: '河南省移动应用程序态势',
      // timeOptions: ['year', 'month', 'week'],
      // timeActive: 'year',
      // mapType: 'province',
      // mapActive: '河南省',
      // mapDrillDown: false,
      // showLeakCard: true,
    },
    // 基础大屏
    base: {
      /**
       * 河南管局配置
       */
      // timeOptions: ['year', 'month', 'week'],
      // timeActive: 'year',
      // mapType: 'province',
      // mapActive: '河南省',
      // mapDrillDown: false,
    },
    // 恶意大屏
    evil: {
      /**
       * 河南管局配置
       */
      // timeOptions: ['year', 'month', 'week'],
      // timeActive: 'year',
      // mapType: 'province',
      // mapActive: '河南省',
      // mapDrillDown: false,
    },
    // 违法违规大屏
    illegal: {
      /**
       * 河南管局配置
       */
      // timeOptions: ['year', 'month', 'week'],
      // timeActive: 'year',
      // mapType: 'province',
      // mapActive: '河南省',
      // mapDrillDown: false,
    },
    // 漏洞大屏
    leak: {
      /**
       * 河南管局配置
       */
      // timeOptions: ['year', 'month', 'week'],
      // timeActive: 'year',
      // mapType: 'province',
      // mapActive: '河南省',
      // mapDrillDown: false,
    },
    // 涉诈大屏
    fraudApp: {
      // timeOptions: ['year', 'month', 'week'],
      // timeActive: 'year',
    },
  },
};
