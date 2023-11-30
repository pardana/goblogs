import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.png" alt="" fill />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>29.11.2023</span>
          <span className={styles.cateegory}>CULTURE</span>
        </div>

        <Link href="/">
          <h1>Lorem Ipsum is simply dummy text of the printing.</h1>
        </Link>
      </div>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into...
      </p>
      <Link href="/">Read More</Link>
    </div>
  );
};

export default Card;
