'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Button from '../../shared/ui/Button/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <h2 className="logo">pizzashop</h2>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
        <ul>
          <li>
            <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/menu/page"
              className={`${styles.link} ${pathname === '/menu/page' ? styles.active : ''}`}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/events/page"
              className={`${styles.link} ${pathname === '/events/page' ? styles.active : ''}`}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/about/page"
              className={`${styles.link} ${pathname === '/about/page' ? styles.active : ''}`}
            >
              About us
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.buttonsContainer}>
        <div className={styles.buttonLogin}>
          <Button variant={'primary'}>Log in</Button>
        </div>
        <div className={styles.buttonCircle}>
          <Button variant={'primary'}>
            <img src="/basket.svg" alt="Корзина" width="20" height="20" />
          </Button>
        </div>
        <div className={styles.burgerButton}>
          <Button onClick={() => setIsOpen(!isOpen)}>
            <img src="/burgermenu.png" alt="Корзина" width="40" height="20" />
          </Button>
        </div>
      </div>
    </header>
  );
}
