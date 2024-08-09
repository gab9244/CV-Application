/* eslint-disable no-undef */


// eslint-disable-next-line react/prop-types
export const InputField = ({ label, type, id, placeholder, value, onChange }) => (
    <label htmlFor={id}>
      <p>{label}</p>
      <input type={type} placeholder={placeholder} id={id}  value={value} onChange={onChange}/>
    </label>
  );