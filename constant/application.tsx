export interface AppInfo {
  color: string;
  name: string;
  url: string;
  title?: string;
  baseRoute: `/${string}`;
}

/** 应用列表，后期应该使用配置的形式，动态加载 */
export const APP_LIST: AppInfo[] = [
  {
    color: 'red',
    name: 'advice',
    title: '小建议',
    url: 'https://www.dododawn.com/dear/2.0/advice.html',
    baseRoute: '/advice',
  },
  {
    color: 'orange',
    name: 'notice',
    title: '公告',
    url: 'https://www.dododawn.com/notice/',
    baseRoute: '/notice',
  },
  {
    color: 'orange',
    name: 'about',
    title: '关于',
    url: 'https://www.dododawn.com/about/',
    baseRoute: '/notice',
  },
];
