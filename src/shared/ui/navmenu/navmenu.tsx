import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import { Menu } from "antd";

import styles from "./styles.module.css";

export interface INavItem {
  title: string;
  key: string;
  link?: string;
  id?: string;
  childs: INavItemsChild[];
}
export interface INavItemsChild {
  key: string;
  title: string;
  hidden?: boolean;
  disabled?: boolean;
  count?: number | string;
  link?: string;
  exact?: boolean;
  childs?: INavItemsChild[];
}

interface NavMenuProps {
  items: INavItem[];
  collapse?: boolean;
}

export const NavMenu = (props: NavMenuProps) => {
  const { pathname } = useLocation();

  const { Item, Divider, SubMenu } = Menu;

  const menuItemsCreator = (item: INavItemsChild | INavItem) => {
    return item.childs?.map(el => createSubMenu(el));
  };

  const createSubMenu = (el: INavItemsChild) => {
    if (el.hidden) {
      return null;
    }

    if (!el.childs && el.link) {
      return (
        <Item disabled={el.disabled} key={el.key}>
          <NavLink
            className={isActive => (isActive ? "active" : "")}
            to={el.link}
          >
            <span>{el.title}</span>
            {el.count !== undefined && (
              <span className={styles.counter}> ({el.count})</span>
            )}
          </NavLink>
        </Item>
      );
    }
    return (
      <Menu.ItemGroup
        key={el.key}
        className={cn(
          el.disabled && "disabled",
          styles.inMenu,
          styles.localMenu
        )}
      >
        <SubMenu key={el.key} title={el.title}>
          {menuItemsCreator(el)}
        </SubMenu>
      </Menu.ItemGroup>
    );
  };

  const getActiveKey = (items: INavItem[]) => {
    let key = "";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const req = (childs: INavItemsChild[]) => {
      return childs.some(el => {
        if (el.childs) {
          return req(el.childs);
        }
        if (el.link === pathname) {
          key = el.key;
          return true;
        }
      });
    };

    items.some(el => req(el.childs));

    return key;
  };

  return (
    <div className={cn(styles.navMenu, props.collapse && styles.collapse_menu)}>
      <Menu
        mode="inline"
        selectedKeys={[getActiveKey(props.items)]}
        defaultOpenKeys={props.items.map(el => el.key)}
      >
        {props.items.map(item => (
          <SubMenu key={item.key} title={item.title}>
            {menuItemsCreator(item)}
            {props.collapse && <Divider className={styles.divider} />}
          </SubMenu>
        ))}
      </Menu>
    </div>
  );
};
