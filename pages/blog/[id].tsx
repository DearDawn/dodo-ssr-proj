import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/post'
import Date from '@/components/date'
import Link from 'next/link'

export default function Post({ postData }: any) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

      <hr />
      <Link href='/'> Back</Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    // https://nextjs.org/docs/advanced-features/i18n-routing#dynamic-routes-and-getstaticprops-pages
    // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-true
    fallback: true,
  }
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
