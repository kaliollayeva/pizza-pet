'use client';
import { useMemo, useState } from 'react';
import styles from './page.module.css';
import Card from '@/widgets/Card/Card';
import Button from '@/shared/ui/Button/Button';
import { pizzas, PizzaCategory } from '@/app/menu/data';

const ITEMS_PER_PAGE = 4;

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<PizzaCategory | 'All'>('All');
  const [visibleMainCount, setVisibleMainCount] = useState(ITEMS_PER_PAGE);
  const [visiblePopularCount, setVisiblePopularCount] = useState(ITEMS_PER_PAGE);

  const categoties = useMemo(() => {
    const uniqueCategories = Array.from(new Set(pizzas.map((pizza) => pizza.category)));
    return ['All', ...uniqueCategories] as const;
  }, []);
  const filteredPizzas = useMemo(() => {
    return activeCategory === 'All'
      ? pizzas
      : pizzas.filter((pizza) => pizza.category === activeCategory);
  }, [activeCategory]);
  const popularPizzas = useMemo(() => {
    return pizzas.filter((pizza) => pizza.isPopular);
  }, []);

  const handleCategoryChange = (cat: PizzaCategory | 'All') => {
    setActiveCategory(cat);
    setVisibleMainCount(ITEMS_PER_PAGE); // Сбрасываем пагинацию при смене категории
  };

  return (
    <section className={styles.menu}>
      <h2 className="title">Menu</h2>

      <ul className={styles.categoryList}>
        {categoties.map((category) => (
          <li key={category}>
            <Button
              variant={activeCategory === category ? 'primary' : 'secondary'}
              className={styles.categoryButton}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          </li>
        ))}
      </ul>

      <ul className={styles.cardList}>
        {filteredPizzas.slice(0, visibleMainCount).map((pizza) => (
          <li key={pizza.id}>
            <Card data={pizza} listPrefix={'main'} />
          </li>
        ))}
      </ul>

      {visibleMainCount < filteredPizzas.length && (
        <div className={styles.showMoreWrapper}>
          <Button
            variant={'primary'}
            onClick={() => setVisibleMainCount((prev) => prev + ITEMS_PER_PAGE)}
          >
            Show more
          </Button>
        </div>
      )}

      <div className={styles.banner}>
        <p className={styles.bannerText}>MOST POPULAR PIZZA</p>
      </div>
      <ul className={styles.cardList}>
        {popularPizzas.slice(0, visiblePopularCount).map((pizza) => (
          <li key={pizza.id}>
            <Card data={pizza} listPrefix={'popular'} />
          </li>
        ))}
      </ul>

      {visiblePopularCount < popularPizzas.length && (
        <div className={styles.showMoreWrapper}>
          <Button
            variant={'primary'}
            onClick={() => setVisiblePopularCount((prev) => prev + ITEMS_PER_PAGE)}
          >
            Show more
          </Button>
        </div>
      )}
    </section>
  );
}
