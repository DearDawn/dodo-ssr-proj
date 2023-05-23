import { RootStore, RootStoreContext } from '@/modal';
import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
const storeRef = new RootStore(1);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={clsx('bg-slate-200 h-full', styles.layout)}>{children}</div>
  );
}
