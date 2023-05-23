import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import { DeskTop } from './desktop';

interface IProps {
  children: React.ReactNode;
}

export const Windows = (props: IProps) => {
  const { children } = props;

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
};
