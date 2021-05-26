import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";

export default function Post({ postData }) {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
