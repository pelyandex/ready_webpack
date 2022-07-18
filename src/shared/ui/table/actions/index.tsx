import { Dropdown, DropDownProps } from "antd";
import type { FC } from "react";
import { createRef } from "react";

import { Icon } from "@shared/ui";

import s from "./styles.module.css";

interface IActionsProps {
  onSelectOverlay: (key: string) => void;
  items: string[];
}



export const Actions: FC<IActionsProps> = ({ items, onSelectOverlay }) => {
  const ref = createRef<HTMLDivElement>();

  const Overlay = () => {
    return (
      <ul>
        {items.map(el => (
          <li key={el} onClick={() => onSelectOverlay(el)}>
            {el}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div ref={ref}>
      <Dropdown.Button
        overlayClassName={s.overlay}
        className={s.dropdown}
        placement="bottomRight"
        trigger={"click" as unknown as DropDownProps["trigger"]}
        overlay={<Overlay />}
        getPopupContainer={() => ref.current as HTMLDivElement}
        icon={<Icon width={15} height={15} icon="more" />}
      />
    </div>
  );
};
