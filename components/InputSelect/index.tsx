import { IOption } from "interfaces/inputSelect";
import React from "react";

type Props = {
  label:string
  field: any;
  meta: any;
  listOption: IOption[];
};

function InputSelect(props: Props) {
  const { field, listOption, meta,label } = props;
  return (
    <div>
      <p className="label-input">{label}</p>
      <select className="select-input" {...field}>
        <option value='' disabled>Lựa chọn</option>
        {listOption.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {meta.touched && meta.error && (
        <div className="error-message">{meta.error}</div>
      )}
    </div>
  );
}

export default InputSelect;
