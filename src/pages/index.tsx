import Image from "next/image";
import styles from "./../styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Virtual Life</a>
        </h1>
      </main>
    </div>
  );
}