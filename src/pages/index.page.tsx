import type { NextPage } from "next";

import SEO from "@/components/SEO";
import { Heading } from "@/components/Typography";

const Home: NextPage = () => {
  return (
    <div>
      <SEO
        title="필리 - 프론트엔드 엔지니어"
        subTitle=""
        description="프론드엔드 기술과 지향하며 살고 싶은 가치관에 대해 기록합니다."
      />
      <Heading as="h1" fontSize={20}>
        필리
      </Heading>
      <Heading fontSize={16}>프론트엔드 엔지니어</Heading>
    </div>
  );
};

export default Home;
