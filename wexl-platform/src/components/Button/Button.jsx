import React from 'react';

/**
 * Reusable Button component with multiple variants
 * @param {string} variant - Button style: 'primary', 'secondary', 'outline', 'ghost'
 * @param {string} size - Button size: 'sm', 'md', 'lg'
 * @param {boolean} disabled - Disabled state
 * @param {function} onClick - Click handler
 * @param {ReactNode} children - Button content
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children,
  className = '',
  type = 'button',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden group';

  const variants = {
    primary: 'bg-accent text-primary hover:bg-yellow-400 focus:ring-accent shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-primary text-white hover:bg-[#0d2f43] focus:ring-primary shadow-lg hover:shadow-xl hover:scale-105',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary hover:scale-105',
    ghost: 'text-primary hover:bg-gray-100 focus:ring-gray-300',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed hover:scale-100';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        disabled ? disabledStyles : ''
      } ${className}`}
      {...props}
    >
      {/* Ripple Effect */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
};

export default Button;
