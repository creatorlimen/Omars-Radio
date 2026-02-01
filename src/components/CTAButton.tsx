'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  className?: string;
}

export default function CTAButton({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
}: CTAButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-8 py-4 font-black transition-all duration-300 text-center uppercase tracking-wider text-sm rounded-full hover:scale-105 hover:shadow-xl active:scale-100';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25',
    secondary: 'bg-white text-primary hover:bg-gray-50 shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  const finalStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={finalStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={finalStyles}>
      {children}
    </button>
  );
}
