import { CommonWindow } from '@/components/container/common-window';
import Windows from '@/components/windows';
import { WindowsRootStoreContext, windowsRootStore } from '@/modal/windows';
import { TWD } from '@/types/windows';
import { observer } from 'mobx-react-lite';
import { useCallback, useContext, useEffect, useState } from 'react';

const MyPage = () => {
  const [show, changeShow] = useState(false);
  const { windowList, topWindow, activeWindow, closeWindow } = useContext(
    WindowsRootStoreContext
  );

  const handleMouseDown = useCallback(
    (window: TWD.WindowItem) => () => {
      activeWindow(window.name);
    },
    [activeWindow]
  );

  const handleCloseWindow = useCallback(
    (window: TWD.WindowItem) => () => {
      closeWindow(window.name);
    },
    [closeWindow]
  );

  useEffect(() => {
    changeShow(true);
  }, []);

  return (
    <WindowsRootStoreContext.Provider value={windowsRootStore}>
      <Windows>
        {show &&
          windowList.map((window: TWD.WindowItem, _index) => (
            <CommonWindow
              title={window.title || window.name}
              key={window.name}
              zIndex={window.zIndex}
              isTop={topWindow?.name === window.name}
              onMouseDown={handleMouseDown(window)}
              onClose={handleCloseWindow(window)}
            >
              <micro-app
                name={window.name}
                url={window.url}
                iframe
                // baseroute={window.baseRoute} // baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
                onCreated={() => console.log('micro-app元素被创建')}
                onBeforemount={() => console.log('即将被渲染')}
                onMounted={() => console.log('已经渲染完成')}
                onUnmount={() => console.log('已经卸载')}
                onError={() => console.log('渲染出错')}
              />
            </CommonWindow>
          ))}
      </Windows>
    </WindowsRootStoreContext.Provider>
  );
};

export default observer(MyPage);
