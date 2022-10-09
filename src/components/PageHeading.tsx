import React from "react";

import { Heading } from "./Typography";

function PageHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <Heading as="h1" fontSize={16} color="mint11">
        {title}
      </Heading>
      <Heading fontSize={24}>{description}</Heading>
    </>
  );
}

export default PageHeading;
