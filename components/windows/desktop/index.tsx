import React, { useContext, useEffect, useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import { APP_LIST, AppInfo } from '@/constant/application';
import { WindowsRootStoreContext } from '@/modal/windows';

interface IProps {}

export const DeskTop = (props: IProps) => {
  const [show, changeShow] = useState(false);
  const { popupWindow } = useContext(WindowsRootStoreContext);
  const appList = APP_LIST;

  const handleAppClick = React.useCallback(
    (app: AppInfo) => () => {
      console.log('[dodo] ', 'app', app);
      popupWindow({ name: app.name, url: app.url, baseRoute: app.baseRoute });
    },
    [popupWindow]
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
