import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import microApp from '@micro-zoe/micro-app';
import { useEffect } from 'react';
import router from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // 初始化micro-app
    microApp.start({
      lifeCycles: {
        created(e) {
          console.log('created');
        },
        beforemount(e) {
          console.log('beforemount');
        },
        mounted(e) {
          console.log('mounted');
        },
        unmount(e) {
          console.log('unmount');
        },
        error(e) {
          console.log('error');
        },
      },
      fetch(url, options, appName) {
        console.log('[dodo] ', 'url,options,appName', url, options, appName);
        const config = {
          // fetch 默认不带cookie，如果需要添加cookie需要配置credentials
          credentials: 'include', // 请求时带上cookie
        };

        return window
          .fetch(url.replace('.html', ''), Object.assign(options, config))
          .then((res) => res.text());
      },
    });

    /**
     * BUG FIX
     * 在nextjs 11下，子应用内部跳转，基座无法监听，导致点击浏览器前进、后退按钮，无法回退到正确的子应用页面
     * 通过监听popstate事件，在地址变化时重新替换为next路由来解决这个问题
     */
    window.addEventListener('popstate', () => {
      const { href, origin } = window.location;
      router.replace(href.replace(origin, ''));
    });
  }, []);

  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
