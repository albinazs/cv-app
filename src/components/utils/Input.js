const Input = (props) => {
  const { type, placeholder, name, onChange, value } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={(e) => onChange(e)}
      value={value}
      maxLength="50"
    />
  );
};

export default Input;
