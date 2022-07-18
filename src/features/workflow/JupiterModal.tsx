import Editor from "@monaco-editor/react";

import { Button, Modal } from "@shared/ui";

const Footer = [
  <Button size="large" key="run" type="primary">
    RUN
  </Button>,
  <Button size="large" key="save" type="primary">
    SAVE
  </Button>,
  <Button size="large" key="cancel">
    CANCEL
  </Button>
];

export const JupiterModal = ({ visible, onChangeVisible }: any) => {
  return (
    <Modal
      footer={Footer}
      width={1000}
      visible={visible}
      onCancel={onChangeVisible}
    >
      {visible && (
        <Editor
          height="60vh"
          defaultLanguage="python"
          defaultValue="// some comment"
        />
      )}
    </Modal>
  );
};
