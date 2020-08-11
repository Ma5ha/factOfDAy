const inputFactory = (style, binder?) => {
  return {
    className: style,
    ...binder,
  };
};

export default inputFactory;
