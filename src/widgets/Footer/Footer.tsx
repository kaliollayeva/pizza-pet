import styles from './Footer.module.css';
import Link from 'next/link';
import { navConfig } from './/constants';
import { InstaIcon, FacebookIcon, TwitterIcon } from './assets/svgs';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksContent}>
        <h2 className="logo">pizzashop</h2>
        <nav className={styles.nav}>
          {navConfig.map((column, index) => (
            <div key={index} className={styles.navColumn}>
              <h3 className={styles.navTitle}>{column.title}</h3>
              <ul className={styles.navList}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className={styles.navLink}>
                      {link.subTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className={styles.contactsContent}>
        <a href="tel:+79373335533" className={styles.number}>
          +7 (937) 333-55-33
        </a>
        <div className={styles.mediaContainer}>
          <InstaIcon className={styles.mediaIcon} />
          <TwitterIcon className={styles.mediaIcon} />
          <FacebookIcon className={styles.mediaIcon} />
        </div>
      </div>
    </footer>
  );
}
