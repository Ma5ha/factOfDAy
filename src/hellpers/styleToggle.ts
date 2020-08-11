const styleToggle = (
  firstStyle: string,
  secondStyle: string,
  logicSwitch: any
) => {
  if (logicSwitch !== undefined) return secondStyle;
  return firstStyle;
};
export default styleToggle;
