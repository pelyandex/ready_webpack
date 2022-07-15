import { observer } from "mobx-react-lite";

import { Input } from "@shared/ui";

import { useStore } from "../models";

export const App = observer(() => {
  const { toggle, auth, temp } = useStore();
  const onChange = (e: any) => {
    toggle(e.target.value);
  };

  return (
    <div>
      <span>{auth}</span>
      <span>{temp}</span>
      <Input onChange={onChange} />
    </div>
  );
});
