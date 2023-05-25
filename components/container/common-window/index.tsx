import React, { DOMAttributes, useEffect, useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import useDraggable from '@/utils/hooks/useDraggable';
import useResizable from '@/utils/hooks/useResizable';

interface IProps {
  children: React.ReactNode;
  zIndex?: number;
  isTop?: boolean;
  onClose?: VoidFunction;
  title?: string;
}

export const CommonWindow = (props: IProps & DOMAttributes<HTMLDivElement>) => {
  const {
    children,
    zIndex = 10,
    isTop = true,
    title = '应用',
    onClose,
    ...restProps
  } = props;
  const [show, changeShow] = useState(false);
  const { ref } = useDraggable(show);
  const { handlerRef } = useResizable(show, ref);

  useEffect(() => {
    changeShow(true);
  }, []);

  if (!show) return null;

  return (
    <div
      className={clsx(styles.commonWindowWrap, isTop && styles.isTop)}
      style={{ zIndex }}
      ref={ref}
      {...restProps}
    >
      <div className={styles.header}>
        <div className={styles.holder}></div>
        <div className={styles.title}>{title}</div>
        <div className={styles.options}>
          <div className={styles.btn}>-</div>
          <div className={styles.btn}>o</div>
          <div className={styles.btn} onClick={onClose}>
            x
          </div>
        </div>
      </div>
      <div className={clsx(styles.commonWindow)}>{children}</div>
      <div className={styles.resize} ref={handlerRef}></div>
    </div>
  );
};
