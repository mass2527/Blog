import { NextPageContext } from "next";

import { Text } from "@/components/Typography";
import { Center } from "@/layouts/Center";

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <Center>
      <Text>
        {statusCode
          ? `서버 에러가 발생했습니다. (statusCode: ${statusCode})`
          : "클라이언트 에러가 발생했습니다."}
      </Text>
    </Center>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
