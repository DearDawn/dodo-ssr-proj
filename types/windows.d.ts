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
