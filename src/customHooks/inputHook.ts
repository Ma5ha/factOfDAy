import { useState } from "react";

const useInputHook = (initValue, type: string = "text") => {
  const [value, setValue] = useState(initValue);
  const reset = () => {
    setValue(initValue);
  };
  const bind = {
    type,
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, reset];
};

export default useInputHook;
