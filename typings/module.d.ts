declare module 'webpack-merge';
declare module "html-webpack-plugin";
declare global {
  interface Window {}
}

declare interface Window {
  [name: string]: any
}

// css 声明配置
declare module "*.css" {
  const content: { [selector: string]: any };
  export default content;
};
declare module "*.less" {
  const content: { [selector: string]: any };
  export default content;
};
declare module "*.scss";
declare module "*.sass" {
  const content: { [selector: string]: any };
  export default content;
};

// 图片格式声明配置
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";