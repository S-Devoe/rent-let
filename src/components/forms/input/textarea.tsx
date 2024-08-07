"use client";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface Props {
  label?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ name, label, required, placeholder, disabled }, ref) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => textAreaRef.current!);

    return (
      <div className="w-full">
        {label && <label htmlFor={name}>label</label>}
        <textarea
          id={name}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full resize-none p-2 rounded-sm border-[2px] h-[100px] border-gray-300 focus-within:outline-none focus-within:border-primary placeholder:text-black/50 text-black"
          ref={textAreaRef}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
