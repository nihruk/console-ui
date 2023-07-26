import styles from './index.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Console UI - NIHR</title>
        <meta name="description" content="Console UI - NIHR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Console UI <span className={styles.pinkSpan}>NIHR</span>
          </h1>
        </div>
      </main>
    </>
  );
}
