import { makeAutoObservable, observable } from 'mobx';
import { createContext } from 'react';

export class WindowsRootStore {
  _windowList: any[] = [];
  data = 123;

  constructor() {
    makeAutoObservable(this, {
      _windowList: true,
      popupWindow: true,
    });
  }

  get windowList() {
    return this._windowList;
  }

  popupWindow = (name = '') => {
    this._windowList.push({ name });
    this.data = 444;
  };
}
export const windowsRootStore = new WindowsRootStore();

export const WindowsRootStoreContext =
  createContext<WindowsRootStore>(windowsRootStore);
