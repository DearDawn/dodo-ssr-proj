import * as React from 'react';
import lottie from 'lottie-web';
import clsx from 'clsx';
import ReactDOM from 'react-dom';
const chickAnimation = require('public/animations/Polite Chick.json');
const bikeAnimation = require('public/animations/bike.json');

interface IProps {}

export const LottieAnimation = (props: IProps) => {
  const {} = props;

  React.useEffect(() => {
    // 初始化
    const lot = lottie.loadAnimation({
      container: document.getElementById('lottie')!,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      // path: 'https://assets6.lottiefiles.com/packages/lf20_vwml2zcv.json',
      animationData: bikeAnimation,
    });

    const chick = lottie.loadAnimation({
      container: document.getElementById('chick')!,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: chickAnimation,
    });

    // 开始播放动画
    lot.play();
    chick.play();

    return () => {
      lot.destroy();
      chick.destroy();
    };
  }, []);

  return (
    <div className='lottie-box fixed w-screen h-screen bg-gray-500 top-0 bg-opacity-50 flex flex-col items-center justify-center'>
      <div className='w-1/2' id='chick'></div>
      <div className='w-1/2' id='lottie'></div>
    </div>
  );
};
export const loading = ({ duration = 0 } = {}) => {
  const root = document.getElementById('lottie-global-root');
  root?.classList.remove('lottie-global-root-hide');
  ReactDOM.render(<LottieAnimation />, root);

  const close = () => {
    root?.classList.add('lottie-global-root-hide');
    ReactDOM.unmountComponentAtNode(
      document.getElementById('lottie-global-root')!
    );
  };

  if (duration) {
    setTimeout(() => close(), duration);
  }

  return { close };
};
