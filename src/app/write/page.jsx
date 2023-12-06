"use client";
import { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <input type="text" placeholder="title" />
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image src="/plus.png" alt="Aditria Pardana" width={16} height={16} />
        </button>

        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image
                src="/images.png"
                alt="Aditria Pardana"
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                src="/external.png"
                alt="Aditria Pardana"
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                src="/video.png"
                alt="Aditria Pardana"
                width={16}
                height={16}
              />
            </button>
          </div>
        )}

        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story"
        />
      </div>
    </div>
  );
};

export default WritePage;
