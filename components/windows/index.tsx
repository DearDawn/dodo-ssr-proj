import React, { useContext } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import { DeskTop } from './desktop';
import { WindowsRootStore, WindowsRootStoreContext } from '@/modal/windows';
import { observer } from 'mobx-react-lite';

interface IProps {
  children: React.ReactNode;
}

export const Windows = observer((props: IProps) => {
  const { children } = props;
  const { windowList, data } = useContext(WindowsRootStoreContext);

  console.log('[dodo] ', 'getWindowList()', windowList, data);

  return (
    <div className={clsx('bg-zinc-300', styles.windows)}>
      <DeskTop />
      <div className={styles.docker}>
        <div className={styles.task}>T</div>
        <div className={styles.task}>Q</div>
        <div className={styles.task}>Q</div>
      </div>
      <div
        className={clsx(
          'relative w-full h-full z-[2] overflow-auto pointer-events-none',
          styles.container
        )}
      >
        {children}
      </div>
    </div>
  );
});
