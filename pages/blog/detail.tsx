import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/layout';
import { CommonWindow } from '@/components/container/common-window';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>详情页</title>
      </Head>
      <main className='flex min-h-screen flex-col items-center p-24'>
        <div className='flex'>SSR DEMO Blog Detail</div>
        <Link href='/'> Back</Link>
      </main>
    </Layout>
  );
}
