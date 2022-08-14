import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
  title: string;
  description: string;
  siteTitle?: string;
  image?: string;
}

export default function SEO({
  title,
  description,
  siteTitle = "필리 - 프론트엔드 개발자",
  image = "https://images.unsplash.com/photo-1618312776768-c5926372a2f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBoaWxseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
}: SEOProps) {
  const router = useRouter();

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`https://blog-mass2527.vercel.app${router.asPath}`}
      />
      {/* Twitter Card */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:url "
        content={`https://blog-mass2527.vercel.app${router.asPath}`}
      />
    </Head>
  );
}
