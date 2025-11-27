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
    primary: 'bg-[#f6b519] dark:bg-[#ffc940] text-[#113e59] dark:text-gray-900 hover:bg-yellow-400 dark:hover:bg-yellow-500 focus:ring-[#f6b519] dark:focus:ring-[#ffc940] shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-[#113e59] dark:bg-[#1a5a7f] text-white hover:bg-[#0d2f43] dark:hover:bg-[#113e59] focus:ring-[#113e59] dark:focus:ring-[#1a5a7f] shadow-lg hover:shadow-xl hover:scale-105',
    outline: 'border-2 border-[#113e59] dark:border-[#1a5a7f] text-[#113e59] dark:text-[#1a5a7f] hover:bg-[#113e59] dark:hover:bg-[#1a5a7f] hover:text-white focus:ring-[#113e59] dark:focus:ring-[#1a5a7f] hover:scale-105',
    ghost: 'text-[#113e59] dark:text-[#1a5a7f] hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-300 dark:focus:ring-gray-600',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
const hoverColor = 'text-black'
  const disabledStyles = 'opacity-50 cursor-not-allowed hover:scale-100';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        disabled ? disabledStyles : ''
      } ${className} ${variants[variant]===variants['outline']?'text-black':''}}`}
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
