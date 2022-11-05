import Image from "next/image";
import { Hero } from "../components/parts/Hero";
import styles from "./../styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
