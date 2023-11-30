import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/menuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* MOST POPULAR */}
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      {/* CATEGORIES */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      {/* EDITOR PICK */}
      <h2 className={styles.subtitle}>{"Chosen by thee editor"}</h2>
      <h1 className={styles.title}>Editor Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
