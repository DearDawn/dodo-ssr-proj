import { makeAutoObservable, observable } from 'mobx';
import { createContext } from 'react';

export class WindowsRootStore {
  _windowList: TWD.WindowQueue = [];

  constructor() {
    makeAutoObservable(this);
  }

  get windowList() {
    return this._windowList.concat();
  }

  get topWindowZ() {
    let zIndex = Math.max(...this._windowList.map((it) => it.zIndex));
    zIndex = Number.isFinite(zIndex) ? zIndex : 0;

    return zIndex + 10;
  }

  hasWindow(name = '') {
    return this._windowList.find((it) => it.name === name);
  }

  popupWindow = (window: Omit<TWD.WindowItem, 'zIndex'>) => {
    const currentWindow = this.hasWindow(window.name);
    if (currentWindow) {
      if (currentWindow.zIndex < this.topWindowZ - 10) {
        currentWindow.zIndex = this.topWindowZ;
      }
      return;
    }

    const newWindow: TWD.WindowItem = {
      ...window,
      zIndex: this.topWindowZ,
    };

    this._windowList = [...this._windowList, newWindow];
  };
}
export const windowsRootStore = new WindowsRootStore();

export const WindowsRootStoreContext =
  createContext<WindowsRootStore>(windowsRootStore);
