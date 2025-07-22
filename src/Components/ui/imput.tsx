import { cn } from "@/Lib";

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
  error,
}: InputProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium text-black"
      >
        {placeholder}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "w-1/2 px-4 py-2 rounded-lg border bg-white bg-opacity-90 text-gray-800 placeholder-gray-500",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          error ? "border-red-500" : "border-gray-300",
          className
        )}
      />

      {error && (
        <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
};
