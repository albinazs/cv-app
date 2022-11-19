const Textarea = (props) => {
  const { placeholder, name, onChange, inputValue } = props;
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={inputValue}
      maxLength="350"
    />
  );
};

export default Textarea;
