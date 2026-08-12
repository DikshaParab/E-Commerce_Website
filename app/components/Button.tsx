"use client";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

const Button = ({ label, onClick, variant = "primary" }: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium text-sm transition-colors";
  const variantStyles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;