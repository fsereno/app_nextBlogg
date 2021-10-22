import Head from "next/head";
import Image from "next/image";
import Cards from "../components/blog/cards";
import Title from "../components/ui/title";
import { getPosts } from "../utils/dal";
import styles from "../styles/main.module.css";
import Description from "../components/ui/description";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Welcome to blog.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Welcome to blog.js</Title>
      <Description>The Javascript blog</Description>
      <div className={styles.grid}>
        <Cards posts={props.posts} />
      </div>
      <footer className={styles.footer}>
        <a
          className={styles.link}
          href="https://fsereno.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
           By{" "}
          <strong className={styles.logo}>
            Fabio Sereno
          </strong>
        </a>
      </footer>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await getPosts({ featured: true });
  return {
    props: {
      posts: JSON.stringify(posts),
    },
  };
}
