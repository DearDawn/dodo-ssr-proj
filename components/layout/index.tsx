import { RootStore, RootStoreContext } from '@/modal'
import React from 'react'
const storeRef = new RootStore(1)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      layout
      {children}
    </div>
  )
}
