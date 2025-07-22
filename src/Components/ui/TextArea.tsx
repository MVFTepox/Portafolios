interface TextareaProps {
  name: string;
  placeholder: string;
  className?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({
  name,
  placeholder,
  className = "",
  value,
  onChange,
  error
}: TextareaProps) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name} className="text-sm font-medium">
      {placeholder}
    </label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border px-3 py-2 rounded ${
        error ? "border-red-500" : "border-gray-300"
      } ${className}`}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);
