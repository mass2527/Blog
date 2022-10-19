import type { NextPage } from "next";

import Page from "@/components/Page";
import useOnlineStatus from "@/hooks/useOnlineStatus";

const Home: NextPage = () => {
  const isOnline = useOnlineStatus();

  return (
    <Page title="Home" description={isOnline ? "🙂" : "🙃"}>
      {/*  */}
    </Page>
  );
};

export default Home;
