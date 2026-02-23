import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';
type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children?: ReactNode;
}

export default function Button({
  children,
  variant,
  disabled,
  className,
  ...props
}: Props) {
  const buttonClasses = clsx(
    styles.button,
    variant && styles[variant], // Класс добавится, только если variant передан
    className
  );
  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
