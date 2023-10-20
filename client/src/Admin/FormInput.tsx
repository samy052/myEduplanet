import React from "react";
import "../Admin/FormInput.css";



interface FormInputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  accept?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, name, placeholder, accept, value, onChange }) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : type === 'file' ? (
        <input
          type={type}
          id={name}
          name={name}
          accept={accept}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormInput;