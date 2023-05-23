import { CommonWindow } from '@/components/container/common-window';
import { Windows } from '@/components/windows';
import { useState, useEffect } from 'react';

const MyPage = () => {
  return (
    <Windows>
      <CommonWindow>
        <micro-app
          name='app1' // name(必传)：应用名称
          url='http://zeroing.jd.com/' // url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
          baseroute='/my-page' // baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
        ></micro-app>
      </CommonWindow>
    </Windows>
  );
};

export default MyPage;
