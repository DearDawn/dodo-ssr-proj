import { CommonWindow } from '@/components/container/common-window';
import { Windows } from '@/components/windows';
import { WindowsRootStoreContext, windowsRootStore } from '@/modal/windows';
import { observer } from 'mobx-react-lite';

const MyPage = () => {
  return (
    <WindowsRootStoreContext.Provider value={windowsRootStore}>
      <Windows>
        <CommonWindow>
          <micro-app
            name='app1' // name(必传)：应用名称
            url='https://zeroing.jd.com/' // url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
            baseroute='/my-page' // baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
          ></micro-app>
        </CommonWindow>
      </Windows>
    </WindowsRootStoreContext.Provider>
  );
};

export default observer(MyPage);
