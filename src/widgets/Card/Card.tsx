'use client';
import Image from 'next/image';
import Button from '@/shared/ui/Button/Button';
import styles from './Card.module.css';
import { useState } from 'react';
import { Pizza } from '@/entities/pizza/model/types';

const pizzaSizes = [
  { value: 22, scale: 0.85 },
  { value: 28, scale: 1 },
  { value: 33, scale: 1.15 },
];

interface Props {
  data: Pizza;
  listPrefix?: string;
}

export default function Card({ data, listPrefix }: Props) {
  const { id, name, description, prices, imageUrl } = data;

  const [checkedSize, setCheckedSize] = useState<number>(28);
  const currentScale = pizzaSizes.find((s) => s.value === checkedSize)?.scale || 1;
  const [count, setCount] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };
  const handleOrder = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };
  const totalPrice = prices[checkedSize as keyof typeof prices] * count;

  return (
    <article className={styles.card}>
      <div className={styles.cardImageContainer}>
        <Image
          src={imageUrl}
          alt="pizzaExample"
          className={styles.pizzaExample}
          width={159}
          height={157}
          style={{
            transform: `scale(${currentScale})`,
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </div>

      <div className={styles.cardContentContainer}>
        <h3 className={styles.pizzaName}>{name}</h3>

        <p className={styles.pizzaIngredients}>{description}</p>

        <div className={styles.sizeSelector}>
          {pizzaSizes.map((size) => (
            <label key={size.value} className={styles.sizePicker}>
              <input
                type="radio"
                name={`size-${listPrefix}-${id}`}
                value={size.value}
                checked={checkedSize === size.value}
                onChange={() => setCheckedSize(size.value)}
              />
              <span className={styles.sizeCircle}>{size.value}</span>
            </label>
          ))}
        </div>
        <div className={styles.priceContainer}>
          <p className={styles.price}>
            {totalPrice} <span className={styles.currency}>$</span>
          </p>
          <div className={styles.quantityContainer}>
            <button className={styles.quantityButton} onClick={decrement}>
              -
            </button>
            <p>{count}</p>
            <button className={styles.quantityButton} onClick={increment}>
              +
            </button>
          </div>
        </div>
        <div className={styles.buttonIngredientsContainer}>
          <Button variant={'primary'} disabled={isAdded} onClick={handleOrder}>
            {isAdded ? 'Added to Cart' : 'Order Now'}
          </Button>
        </div>
      </div>
    </article>
  );
}
