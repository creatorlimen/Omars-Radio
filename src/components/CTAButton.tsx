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
    'inline-block px-6 py-3 font-black transition-all duration-300 text-center uppercase tracking-wider text-sm';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 border-2 border-primary',
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
