import { CommonWindow } from '@/components/container/common-window';
import Windows from '@/components/windows';
import { WindowsRootStoreContext, windowsRootStore } from '@/modal/windows';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

const MyPage = () => {
  const { windowList, topWindowZ } = useContext(WindowsRootStoreContext);
  console.log('[dodo] ', 'windowList', windowList);

  return (
    <WindowsRootStoreContext.Provider value={windowsRootStore}>
      <Windows>
        {windowList.map((window, index) => (
          <CommonWindow
            key={index}
            zIndex={window.zIndex}
            isTop={topWindowZ - 10 === window.zIndex}
          >
            <micro-app
              name={window.name}
              url={window.url}
              baseroute={window.baseRoute} // baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
            ></micro-app>
          </CommonWindow>
        ))}
      </Windows>
    </WindowsRootStoreContext.Provider>
  );
};

export default observer(MyPage);
