'use client';
import Image from 'next/image';
import Button from '@/shared/ui/Button/Button';
import styles from './Card.module.css';

export default function Card() {
  return (
    <article className={styles.card}>
      <div className={styles.cardImageContainer}>
        <Image
          src="/pizzaExample.png"
          alt="pizzaExample"
          className={styles.pizzaExample}
          width={159}
          height={157}
        />
      </div>

      <div className={styles.cardContentContainer}>
        <h3 className={styles.pizzaName}>Argentina</h3>

        <p className={styles.pizzaIngredients}>
          Filling: onion, potato, tomato, mushrooms, cheese, olives, meat
        </p>

        <div className={styles.sizeSelector}>
          <label className={styles.sizePicker}>
            <input type="radio" name="size" value="22" />
            <span className={styles.sizeCircle}>22</span>
          </label>

          <label className={styles.sizePicker}>
            <input type="radio" name="size" value="28" defaultChecked />
            <span className={styles.sizeCircle}>28</span>
          </label>

          <label className={styles.sizePicker}>
            <input type="radio" name="size" value="33" />
            <span className={styles.sizeCircle}>33</span>
          </label>
        </div>
        <div className={styles.priceContainer}>
          <p className={styles.price}>
            8,35 <span className={styles.currency}>$</span>
          </p>
          <div className={styles.quantityContainer}>
            <button className={styles.quantityButton}>-</button>
            <p>1</p>
            <button className={styles.quantityButton}>+</button>
          </div>
        </div>
        <div className={styles.buttonIngredientsContainer}>
          <Button variant={'primary'}>Order Now</Button>
        </div>
      </div>
    </article>
  );
}
