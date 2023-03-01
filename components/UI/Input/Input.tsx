interface FormProps {
  label: string;
  type: string;
}
const Input = ({ label, type }: FormProps) => {
  return (
    <>
      <label htmlFor='name'>
        {label}
        <input type={type} />
      </label>
    </>
  );
};

export default Input;
