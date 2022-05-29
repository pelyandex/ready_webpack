type $TSFixMe = any;
declare const __DEV__: boolean;
declare module "*.module.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.svg" {
  const content: React.ComponentType<React.SVGAttributes<SVGElement>>;
  export default content;
}
