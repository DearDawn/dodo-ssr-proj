import { makeAutoObservable, observable } from 'mobx';
import { createContext } from 'react';
import { unmountApp } from '@micro-zoe/micro-app';

export class WindowsRootStore {
  private _windowList: TWD.WindowQueue = [];
  private _CONFIG = {
    Z_INDEX_SPAN: 10,
    MAX_WINDOW_COUNT: 10,
  };

  constructor() {
    makeAutoObservable(this);
  }

  get windowList() {
    return this._windowList.concat();
  }

  private get _topWindowZ() {
    const { Z_INDEX_SPAN, MAX_WINDOW_COUNT } = this._CONFIG;
    let zIndex = Math.max(...this._windowList.map((it) => it.zIndex));
    zIndex = Number.isFinite(zIndex) ? zIndex : 0;

    if (zIndex >= MAX_WINDOW_COUNT * Z_INDEX_SPAN) {
      let zTemp = 0;
      const list = [...this._windowList].sort((a, b) => a.zIndex - b.zIndex);

      list.forEach((it) => {
        zTemp += Z_INDEX_SPAN;
        it.zIndex = zTemp;
      });

      zIndex = zTemp;
    }

    return zIndex;
  }

  private get _newWindowZ() {
    return this._topWindowZ + this._CONFIG.Z_INDEX_SPAN;
  }
  private get _windowListFull() {
    return this._windowList.length >= this._CONFIG.MAX_WINDOW_COUNT;
  }

  get topWindow() {
    return this._windowList.find((w) => w.zIndex === this._topWindowZ);
  }

  hasWindow = (name = '') => {
    return this._windowList.find((it) => it.name === name);
  };

  activeWindow = (name = ''): void => {
    const targetWindow = this.hasWindow(name);
    if (targetWindow) {
      if (targetWindow.zIndex < this._topWindowZ) {
        targetWindow.zIndex = this._newWindowZ;
      }
    } else {
      console.warn('[dodo] ', '目标窗口不存在');
    }
  };

  closeWindow = (name = ''): void => {
    const targetWindow = this.hasWindow(name);
    if (targetWindow) {
      const index = this._windowList.indexOf(targetWindow);

      this._windowList = [
        ...this._windowList.slice(0, index),
        ...this._windowList.slice(index + 1),
      ];
    } else {
      console.warn('[dodo] ', '目标窗口不存在');
    }
  };

  popupWindow = (window: Omit<TWD.WindowItem, 'zIndex'>) => {
    const targetWindow = this.hasWindow(window.name);
    if (targetWindow) {
      this.activeWindow(targetWindow.name);
      return;
    }

    if (this._windowListFull) {
      console.warn('[dodo] ', '窗口数量已达上限');
      return;
    }

    const newWindow: TWD.WindowItem = {
      ...window,
      zIndex: this._newWindowZ,
    };

    this._windowList = [...this._windowList, newWindow];
  };
}
export const windowsRootStore = new WindowsRootStore();

export const WindowsRootStoreContext =
  createContext<WindowsRootStore>(windowsRootStore);
