import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import useDraggable from '@/utils/hooks/useDraggable';

interface IProps {
  children: React.ReactNode;
  zIndex?: number;
  isTop?: boolean;
}

export const CommonWindow = (props: IProps) => {
  const { children, zIndex = 10, isTop = true } = props;
  const [show, changeShow] = useState(false);
  const { ref } = useDraggable(show);

  useEffect(() => {
    changeShow(true);
  }, []);

  if (!show) return null;

  return (
    <div
      className={clsx(styles.commonWindowWrap, isTop && styles.isTop)}
      style={{ zIndex }}
      ref={ref}
    >
      <div className={styles.topOptions}>
        <div className={styles.btn}>-</div>
        <div className={styles.btn}>o</div>
        <div className={styles.btn}>x</div>
      </div>
      <div className={clsx(styles.commonWindow)}>{children}</div>
    </div>
  );
};
