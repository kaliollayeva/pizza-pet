import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children?: ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  disabled,
  className = '',
  ...props
}: Props) {
  const buttonClasses = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
