import LandingPage from "@/components/landing";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
       HEADER
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
       <LandingPage />
      </div>

      <div className={styles.grid}>
       
      
      </div>
    </main>
  );
}
