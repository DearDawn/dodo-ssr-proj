import { MicroApp } from '@micro-zoe/micro-app';

declare namespace TWD {
  interface WindowItem {
    name: string;
    title?: string;
    url: string;
    baseRoute: string;
    zIndex: number;
  }

  type WindowQueue = WindowItem[];
}

// types.d.ts

declare global {
  interface Window {
    microApp: MicroApp;
  }

  namespace JSX {
    interface IntrinsicElements {
      'micro-app': any;
    }
  }
}
