import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Layout from '@/components/layout';
import { getSortedPostsData } from '../lib/post';
import Date from '../components/date';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { RootStoreContext } from '@/modal';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { dodoLog } from '@/@dodo-utils';
import { LottieAnimation, loading } from '@/components/loading';
import Router from 'next/router';

const Home = ({
  allPostsData = [],
}: {
  allPostsData: Record<string, any>[];
}) => {
  const { secondsPassed, increaseTimer } = useContext(RootStoreContext);
  const { t, i18n } = useTranslation('common');

  React.useEffect(() => {
    const timer = setInterval(() => {
      increaseTimer();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToDetail = React.useCallback(() => {
    const { close } = loading();

    setTimeout(() => {
      // Router.push('/blog/detail');
      close();
    }, 500);
  }, []);

  // dodoLog('123')

  return (
    <Layout>
      <main className='flex min-h-screen flex-col items-center p-24'>
        <div className='w-full text-center font-medium p-4 box-border'>
          {t('title')} {secondsPassed}
        </div>
        <section className='bg-white rounded-2xl mt-5 box-border p-4 shadow-lg'>
          <h2>
            <span className='font-medium'>{t('blog')}</span>
            <a className='text-emerald-700 ml-2' onClick={handleToDetail}>
              {t('detailText')}
            </a>
            <Link className='font-medium' href='/windows'>
              To Child
            </Link>
          </h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className='mt-2'>
                <Link className='font-medium' href={`/blog/${id}`}>
                  {title}
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
};

export default observer(Home);

export async function getStaticProps({ locale }: any) {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      allPostsData,
    },
  };
}
