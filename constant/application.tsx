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
    baseRoute: '/a',
  },
  {
    color: 'green',
    name: 'dododawn_2_0',
    title: '小破站 2.0',
    url: 'https://www.dododawn.com/dear/2.0/index.html',
    baseRoute: '/b',
  },
  {
    color: 'blue',
    name: 'C',
    url: 'http://www.micro-zoe.com/child/react17/',
    baseRoute: '/c',
  },
  {
    color: 'pink',
    name: 'D',
    url: 'http://www.micro-zoe.com/child/app-nextjs11/',
    baseRoute: '/d',
  },
  {
    color: 'orange',
    name: 'E',
    url: 'http://zeroing.jd.com/',
    baseRoute: '/e',
  },
];
