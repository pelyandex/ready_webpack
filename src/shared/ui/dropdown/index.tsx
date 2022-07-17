import { Dropdown as AntdDropdown, DropdownProps } from "antd";
import { FC } from "react";

export const Dropdown: FC<DropdownProps> = ({ ...props }) => {
  return <AntdDropdown {...props} />;
};
