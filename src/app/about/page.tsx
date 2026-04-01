'use client';
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import pizzaGroup from '../../../public/pizzaGroup.png';

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
          <Image src={pizzaGroup} alt="pizzaGroup" />
        </div>

        <p className="standartText">
          The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees,
          smoothly performing work in order to receive / prepare / form / deliver customer orders on
          time.
        </p>
      </div>

      <div className={styles.bannerContainer}>
        <img className={styles.fries} src="/fries1.png" alt="fries" />
        <div className={styles.mainImgWrapper}></div>
        <img className={styles.pizza} src="/pizza1.png" alt="pizza"/>
      </div>
    </section>
  );
}
