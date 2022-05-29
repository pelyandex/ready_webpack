import { Badge as AntBadge } from "antd";

import type { FC } from "react";
import type { BadgeProps } from "antd";

export const Badge: FC<BadgeProps> = props => {
  return <AntBadge {...props} />;
};
