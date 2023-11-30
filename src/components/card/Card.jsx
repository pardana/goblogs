import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/p1.jpeg"
          alt="img"
          width={400}
          height={350}
          className={styles.image}
        />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>29.11.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>

        <Link href="/">
          <h1>Lorem Ipsum is simply dummy text printing.</h1>
        </Link>

        <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          unknown printer took a galley of type and scrambled it to make a type
          specimen book leap into...
        </p>

        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
