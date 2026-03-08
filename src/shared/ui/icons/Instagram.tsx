import { ComponentProps, FC } from 'react';

interface IconProps extends ComponentProps<'svg'> {
  size?: number;
}

export const InstaIcon: FC<IconProps> = ({ className, size = 32, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="#ff6432"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path d="M17,0H7C3.14,0,0,3.14,0,7v10c0,3.86,3.14,7,7,7h10c3.86,0,7-3.14,7-7V7c0-3.86-3.14-7-7-7ZM22,17c0,2.76-2.24,5-5,5H7c-2.76,0-5-2.24-5-5V7c0-2.76,2.24-5,5-5h10c2.76,0,5,2.24,5,5v10Z" />
    <path d="M18,3c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5,2.5-1.12,2.5-2.5-1.12-2.5-2.5-2.5ZM18,6c-.28,0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5Z" />
    <path d="M12,6.5c-3.03,0-5.5,2.47-5.5,5.5s2.47,5.5,5.5,5.5,5.5-2.47,5.5-5.5-2.47-5.5-5.5-5.5ZM12,15.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5-1.57,3.5-3.5,3.5Z" />
  </svg>
);
