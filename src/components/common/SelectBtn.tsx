"use client"
import React, { ReactNode, KeyboardEvent } from 'react';
import { FaAngleDown } from "react-icons/fa6";

interface SelectBtnProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  ariaLabel?: string;
}

const SelectBtn: React.FC<SelectBtnProps> = ({
  onClick,
  disabled = false,
  className = '',
  children,
  variant = 'secondary',
  ariaLabel,
}) => {
  
  const baseStyles = 'px-4 py-2 rounded-full border text-sm flex  gap-2 items-center  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-purple text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-white text-gray-500 focus:ring-gray-400',
    outline: 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500',
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <button
      onClick={onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      className={`${buttonStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      aria-label={ariaLabel}
      role="button"
      tabIndex={disabled ? -1 : 0}
      type='submit'
    >
      {children}
    </button>
  );
};

export default SelectBtn;