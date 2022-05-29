import { Form as AntdForm } from "antd";

import s from "./styles.module.css";

import type { FC } from "react";
import type { FormProps, FormItemProps } from "antd";

interface Itest extends FormProps {
  useForm: typeof AntdForm.useForm;
  Item: FC<FormItemProps>;
}

export const Form = (props: Omit<Itest, "children">) => {
  return (
    <div className={s.form}>
      <AntdForm requiredMark={false} {...props} />
    </div>
  );
};
const FormItem: FC<FormItemProps> = props => {
  const isOptional = props.required === false;
  return (
    <div className={s.formItem}>
      {isOptional && <span className={s.optional}>optional</span>}
      <AntdForm.Item {...props} />
    </div>
  );
};

Form.useForm = AntdForm.useForm;
Form.Item = FormItem;
