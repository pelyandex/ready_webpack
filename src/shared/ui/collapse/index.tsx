import { Collapse as AntdCollapse, CollapseProps } from "antd";
import { FC } from "react";

interface ICollapse extends FC<CollapseProps> {
  Panel: typeof AntdCollapse.Panel;
}

export const Collapse: ICollapse = ({ ...props }) => {
  return <AntdCollapse {...props} />;
};

Collapse.Panel = AntdCollapse.Panel;
