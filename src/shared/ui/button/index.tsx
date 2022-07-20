import type { ButtonProps } from "antd";
import { Button as AntdButton } from "antd";
import type { FC } from "react";

export const Button: FC<ButtonProps> = ({ ...props }) => {
  return <AntdButton {...props} />;
};
