import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyles = "px-6 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-accent-500 hover:bg-accent-600 text-white",
    secondary: "bg-primary-700 hover:bg-primary-600 text-white",
    outline: "border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {children}
    </button>
  );
}