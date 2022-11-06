import Head from 'next/head';
import { useRouter } from 'next/router';

export interface SEOProps {
  title: string;
  subTitle?: string;
  description: string;
  image?: string;
}

export default function SEO({
  title,
  description,
  subTitle,
  image = 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNvbG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60',
}: SEOProps) {
  const router = useRouter();

  return (
    <Head>
      <title>{subTitle ? `${title} - ${subTitle}` : title}</title>
      <meta name="description" content={description} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="필리" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://philly.im${router.asPath}`} />
      {/* Twitter Card */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url " content={`https://philly.im${router.asPath}`} />
    </Head>
  );
}
