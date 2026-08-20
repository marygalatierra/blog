import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p className="text-gray-300 leading-relaxed">
        Hi! I’m Mary Antonette Galatierra, a BSIT student. In my free time, I love doing different things such as sleeping, watching movies, eating, and more. In five years, I see myself having a stable life, achieving my dreams, becoming more independent, and living a better and successful life.

        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
