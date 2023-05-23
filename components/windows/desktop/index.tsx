import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import { APP_LIST, AppInfo } from '@/constant/application';

interface IProps {}

export const DeskTop = (props: IProps) => {
  const [show, changeShow] = useState(false);
  const appList = APP_LIST;

  const handleAppClick = React.useCallback(
    (app: AppInfo) => () => {
      console.log('[dodo] ', 'app', app);
    },
    []
  );

  useEffect(() => {
    changeShow(true);
  }, []);

  if (!show) return null;

  return (
    <div
      className={clsx(
        'absolute w-full h-full z-[1] overflow-auto',
        styles.deskTop
      )}
    >
      {appList.map((it) => (
        <div
          style={{ background: it.color }}
          className={styles.app}
          key={it.name}
          onClick={handleAppClick(it)}
        >
          {it.name}
        </div>
      ))}
    </div>
  );
};
