import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";

const singlePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="img" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>04.12.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="img" fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              iusto quae, doloribus voluptatem corporis vel? Nostrum vitae
              libero omnis reprehenderit animi, nam eum asperiores! Officia aut
              optio aspernatur exercitationem quod?
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              iusto quae, doloribus voluptatem corporis vel? Nostrum vitae
              libero omnis reprehenderit animi, nam eum asperiores! Officia aut
              optio aspernatur exercitationem quod?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              iusto quae, doloribus voluptatem corporis vel? Nostrum vitae
              libero omnis reprehenderit animi, nam eum asperiores! Officia aut
              optio aspernatur exercitationem quod
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default singlePage;
