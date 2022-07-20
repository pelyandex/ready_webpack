import Editor from "@monaco-editor/react";
import { Button, Modal } from "@shared/ui";

const Footer = [
  <Button key="run" size="large" type="primary">
    RUN
  </Button>,
  <Button key="save" size="large" type="primary">
    SAVE
  </Button>,
  <Button key="cancel" size="large">
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
      <Editor
        height="60vh"
        defaultLanguage="python"
        defaultValue="// some comment"
      />
    </Modal>
  );
};
