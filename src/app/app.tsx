import { observer } from "mobx-react-lite";

import { Input } from "@shared/ui";

import { useStore } from "../models";

export const App = observer(() => {
  const { toggle, auth } = useStore();
  const onChange = (e: any) => {
    toggle(e.target.value);
  };

  return (
    <div>
      <span>{auth}</span>
      <Input onChange={onChange} />
    </div>
  );
});
