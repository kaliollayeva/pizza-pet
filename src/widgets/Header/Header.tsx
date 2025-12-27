import Link from 'next/link';
import styles from './Header.module.css';
import Button from '../../shared/ui/Button/Button';

export default function Header() {
  return (
    <div className={styles.header}>
      <h2 className="logo">pizzashop</h2>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/menu/page">
          Menu
        </Link>
        <Link className={styles.link} href="/events/page">
          Events
        </Link>
        <Link className={styles.link} href="/about/page">
          About us
        </Link>
      </nav>

      <div className={styles.button}>
        <Button variant={'primary'}>Log in</Button>
      </div>
    </div>
  );
}
