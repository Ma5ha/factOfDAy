import { useState } from "react";

const useInputHook = (
  initValue,
  type: string = "text",
  placeholder?: string
) => {
  const [value, setValue] = useState(initValue);
  const reset = () => {
    setValue(initValue);
  };
  const bind = {
    type,
    value,
    placeholder,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, reset];
};

export default useInputHook;
