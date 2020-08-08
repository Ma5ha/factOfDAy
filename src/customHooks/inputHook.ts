import { useState } from "react";

const useInputHook = (initValue) => {
  const [value, setValue] = useState(initValue);
  const reset = () => {
    setValue(initValue);
  };
  const bind = {
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, reset];
};

export default useInputHook;
