import styles from "@/app/page.module.css";
import Image from "next/image";
import MoviesMoviesMovies from "@/public/2026-05-25_Movies-Movies-Movies_Website-example.png";

export default function Websites() {
  return (
    <main className={styles.main}>
      <h1>Website Design</h1>
      <article className="container">
        <h2>Movies Movies Movies</h2>
        <Image
          src={MoviesMoviesMovies}
          className="img-fluid rounded-4"
          alt="Movies Movies Movies website presented on multiple devices including desktop, laptop, tablet and phone"
        />
      </article>
    </main>
  );
}
