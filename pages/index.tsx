import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>呪文を選択してください</p>
        <select name="word">
          <option value="hamamatsu">浜松</option>
          <option value="aichi">愛知</option>
        </select>
        <select name="word2">
          <option value="name1">ケイト</option>
          <option value="name2">ハヤテ</option>
        </select>
        <select name="word3">
          <option value="food1">みかん</option>
          <option value="food2">トマト</option>
        </select>
        　　<Link href="/posts/firstpost">
            <a>決定</a>
          </Link>
      </section>
    </Layout>
  );
}