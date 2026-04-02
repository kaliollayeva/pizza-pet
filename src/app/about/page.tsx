'use client';
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.contentContainer}>
        <h1 className="title">About us</h1>
        <p className="standartText">
          In just a couple of years, we have opened 6 outlets in different cities: Kazan,
          Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in
          other major cities of Russia.
        </p>
        <div className={styles.leftImgCont}>
          <Image src="/pizzaGroup.png" alt="pizzaGroup" width={490} height={189} />
        </div>

        <p className="standartText">
          The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees,
          smoothly performing work in order to receive / prepare / form / deliver customer orders on
          time.
        </p>
      </div>

      <div className={styles.bannerContainer}>
        <Image className={styles.fries} src="/fries1.png" alt="fries" width={203} height={215} />
        <div className={styles.mainImgWrapper} />
        <Image className={styles.pizza} src="/pizza1.png" alt="pizza" width={203} height={215} />
      </div>
    </section>
  );
}
