const Textarea = (props) => {
  const { placeholder, name, onChange, value } = props;
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      maxLength="350"
    />
  );
};

export default Textarea;
