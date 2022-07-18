import type { SpinProps } from "antd";
import { Spin } from "antd";

import s from "./styles.module.css";

interface ILoadingProps extends SpinProps {
  containerClass?: string;
}

export const Loading: React.FC<ILoadingProps> = ({ ...props }) => {
  return (
    <div className={s.container}>
      <Spin {...props} />
    </div>
  );
};
