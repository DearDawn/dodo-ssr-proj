import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import microApp from '@micro-zoe/micro-app';
import { useEffect } from 'react';
import router from 'next/router';
import { Windows } from '@/components/windows';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // 初始化micro-app
    microApp.start();

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
