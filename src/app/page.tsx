'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/shared/ui/Button/Button';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <section className={styles.home}>
      <div className={styles.contentContainer}>
        <h1 className="title">
          The Fastest <br /> Pizza 🍕 Delivery
        </h1>
        <p className="standartText">
          We will deliver juicy pizza for your family in 30 minutes, if the courier is late -{' '}
          <span className={styles.textAccent}>pizza is free!</span>
        </p>
        <div className={styles.textBottomContainer}>
          <div className={styles.videoContentContainer}>
            <p className="standartText">Cooking process:</p>
            <div className={styles.videoContainer}>
              {!isPlaying ? (
                <div className={styles.videoOverlay}>
                  <button
                    className={styles.playButton}
                    onClick={handlePlay}
                    aria-label="Запустить видео"
                  >
                    <div className={styles.playIcon} />
                  </button>
                </div>
              ) : (
                <iframe
                  className={styles.videoElement}
                  src="https://www.youtube.com/embed/JSztknw01vw?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          <div className={styles.buttons}>
            <div className={styles.primaryWrapper}>
              <Button variant={'primary'}>To order</Button>
            </div>
            <div className={styles.secondaryWrapper}>
              <Button variant={'outline'}>Pizza-Menu</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerImg}>
          <Image src="/mainrightimg.webp" alt="mainrightimg" width={456} height={683} />
        </div>
      </div>
    </section>
  );
}
