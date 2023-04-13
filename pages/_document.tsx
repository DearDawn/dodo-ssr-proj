import { RootStore, RootStoreContext } from '@/modal'
import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  const storeRef = React.useRef(new RootStore(1))

  return (
    <RootStoreContext.Provider value={storeRef.current}>
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </RootStoreContext.Provider>
  )
}
