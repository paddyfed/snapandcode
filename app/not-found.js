import Link from "next/link";
import styles from "@/app/page.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1>Not Found</h1>
      <p>Oops! This page isn't available!</p>
      <Link href="/">Return to the home page</Link>
    </main>
  );
}
