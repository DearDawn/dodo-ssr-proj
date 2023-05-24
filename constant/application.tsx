export interface AppInfo {
  color: string;
  name: string;
  url: string;
  baseRoute: `/${string}`;
}

/** 应用列表，后期应该使用配置的形式，动态加载 */
export const APP_LIST: AppInfo[] = [
  {
    color: 'red',
    name: 'A',
    url: 'http://zeroing.jd.com/',
    baseRoute: '/a',
  },
  {
    color: 'green',
    name: 'B',
    url: 'http://zeroing.jd.com/',
    baseRoute: '/b',
  },
  {
    color: 'blue',
    name: 'C',
    url: 'http://zeroing.jd.com/',
    baseRoute: '/c',
  },
  {
    color: 'pink',
    name: 'D',
    url: 'http://zeroing.jd.com/',
    baseRoute: '/d',
  },
];
