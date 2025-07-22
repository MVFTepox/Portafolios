interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  className?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  name,
  placeholder,
  className = "",
  value,
  onChange,
  error
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {placeholder}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
      />

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};
