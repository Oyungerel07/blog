import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>HI my name is Oyungerel</p>
        <p>
          (This is my web site - Olonlog exe school{' '}
          <a href="https://nextjs.org/learn">Nextjs-blog</a>.)
        </p>
      </section>
    </Layout>
  )
}
