import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { HomeSection } from "@/components/Home/HomeSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <HomeSection />
    </div>
  );
}
