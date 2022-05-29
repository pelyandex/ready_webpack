import { Checkbox as AntdCheckbox } from "antd";

import type { FC } from "react";
import type { CheckboxProps } from "antd";

export const Checkbox: FC<CheckboxProps> = props => {
  return <AntdCheckbox {...props} />;
};
