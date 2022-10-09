import styled from "styled-components";

import React, { ReactNode } from "react";

import PageHeading from "./PageHeading";
import SEO, { SEOProps } from "./SEO";

function Page({
  title,
  description,
  children,
  ...props
}: SEOProps & {
  children: ReactNode;
}) {
  return (
    <PageLayout>
      <SEO title={title} description={description} {...props} />
      <PageHeading title={title} description={description} />
      {children}
    </PageLayout>
  );
}

const PageLayout = styled.div`
  padding: ${({ theme }) => theme.spacers[32]} 0;
`;

export default Page;
