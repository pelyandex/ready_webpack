import { Menu as AntdMenu, MenuProps } from "antd";
import { FC } from "react";

export const Menu: FC<MenuProps> = ({ ...props }) => {
  return <AntdMenu {...props} />;
};
