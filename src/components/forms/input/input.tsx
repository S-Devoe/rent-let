"use client";
import {
  HTMLInputTypeAttribute,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

interface Props {
  label?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      label,
      required,
      placeholder,
      onChange,
      value,
      disabled,
      type = "text",
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    return (
      <div className="w-full">
        {label && <label htmlFor={name}>label</label>}
        <input
          id={name}
          required={required}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className="w-full p-2 rounded-sm border-[2px] border-gray-300 focus-within:outline-none focus-within:border-primary placeholder:text-black/50 text-black"
          ref={inputRef}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
