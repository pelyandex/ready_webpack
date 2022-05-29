import { FC } from "react";
import { Input as AntdInput } from "antd";

import type { InputProps } from "antd";

interface IInput extends FC<InputProps> {
  TextArea: typeof AntdInput.TextArea;
}

export const Input: IInput = ({ ...props }) => {
  return <AntdInput spellCheck={false} {...props} />;
};

Input.TextArea = AntdInput.TextArea;
