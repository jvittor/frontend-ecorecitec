'use client';

import React from 'react';
import { ButtonProps } from '@/core/entities/button';
import { useButtonStyles } from '@/features/button/use-button';

const ButtonLogin: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  bgColor = 'bg-blue-500',
  hoverColor = 'hover:bg-blue-600',
}) => {
  const buttonStyles = useButtonStyles(bgColor, hoverColor);

  return (
    <button
      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
    >
      {label}
    </button>
  );
};

export default ButtonLogin;
