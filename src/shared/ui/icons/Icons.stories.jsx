import { Sprite, Icon } from ".";

export default {
  title: "UI",
  component: Icons,
  parameters: {
    layout: "centered"
  }
};

export const Icons = () => (
  <div style={{ display: "grid", gridGap: "20px", gridAutoFlow: "column" }}>
    <Sprite />
    <div title="logout">
      <Icon icon="logout" />
    </div>
    <div title="lock">
      <Icon icon="lock" />
    </div>
    <div title="userPlaceholder">
      <Icon icon="userPlaceholder" />
    </div>
    <div title="searchIcon">
      <Icon icon="searchIcon" />
    </div>
    <div title="more">
      <Icon icon="more" />
    </div>
  </div>
);
