import React, { ReactNode } from "react";

import PageLayout from "@/layouts/PageLayout";

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

export default Page;
