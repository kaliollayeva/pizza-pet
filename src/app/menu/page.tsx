'use client';
import styles from './page.module.css';
import Card from '@/widgets/Card/Card';
import Button from '@/shared/ui/Button/Button';

export default function Menu() {
  return (
    <section className={styles.menu}>
      <h2 className="title">Menu</h2>

      <ul className={styles.categoryList}>
        <li>
          <Button variant={'primary'} className={styles.categoryButton}>
            Show All
          </Button>
        </li>
        <li>
          <Button variant={'secondary'} className={styles.categoryButton}>
            Meat
          </Button>
        </li>
        <li>
          <Button variant={'secondary'} className={styles.categoryButton}>
            Vegetarian
          </Button>
        </li>
        <li>
          <Button variant={'secondary'} className={styles.categoryButton}>
            Sea products
          </Button>
        </li>
        <li>
          <Button variant={'secondary'} className={styles.categoryButton}>
            Mushroom
          </Button>
        </li>
      </ul>

      <ul className={styles.cardList}>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>

      <div className={styles.banner}>
        <p className={styles.bannerText}>MOST POPULAR PIZZA</p>
      </div>
      <ul className={styles.cardList}>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    </section>
  );
}
