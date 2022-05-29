import cn from "classnames";

import s from "./styles.module.css";

import type { ReactElement } from "react";

interface ILayoutProps {
  LeftSide: ReactElement;
  RightSide: ReactElement;
  Header: ReactElement;
}

export const Layout: React.FC<Partial<ILayoutProps>> = ({
  LeftSide = null,
  RightSide = null,
  Header = null
}) => {
  return (
    <div className={cn(s.sider, "sider")}>
      <header>{Header}</header>
      <div className={cn(s.content, "context")}>
        <div className={cn(s.leftSide, "leftSide")}>{LeftSide}</div>
        <section className={cn(s.rightSide, "rightSide")}>{RightSide}</section>
      </div>
    </div>
  );
};
