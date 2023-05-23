import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

interface IProps {
  children: React.ReactNode;
}

export const CommonWindow = (props: IProps) => {
  const { children } = props;
  const [show, changeShow] = useState(false);

  useEffect(() => {
    changeShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className={styles.commonWindowWrap}>
      <div className={styles.topOptions}>
        <div className={styles.btn}>-</div>
        <div className={styles.btn}>o</div>
        <div className={styles.btn}>x</div>
      </div>
      <div className={clsx(styles.commonWindow)}>{children}</div>
    </div>
  );
};
