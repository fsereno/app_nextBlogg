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
      <Description value="The Javascript blog" />
      <div className={styles.grid}>
        <Cards posts={props.posts} />
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts({ featured: true });
  return {
    props: {
      posts: JSON.stringify(posts),
    },
    revalidate: 10,
  };
}
