import React from 'react';

import { SEOProps } from './SEO';
import { Heading } from './Typography';

function PageHeading({ title, description }: Pick<SEOProps, 'title' | 'description'>) {
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
