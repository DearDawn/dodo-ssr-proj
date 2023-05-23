import { RootStore, RootStoreContext } from '@/modal';
import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  const storeRef = React.useRef(new RootStore(1));

  return (
    <RootStoreContext.Provider value={storeRef.current}>
      <Html lang='en'>
        <Head />
        <body>
          {/* 不要在这外面包组件，cssModule 有问题 */}
          <Main />
          <NextScript />

          <div
            id='lottie-global-root'
            className='transition lottie-global-root-hide'
          ></div>
        </body>
      </Html>
    </RootStoreContext.Provider>
  );
}
