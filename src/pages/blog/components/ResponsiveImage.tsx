import { css } from 'styled-components';

import Image, { ImageProps } from 'next/image';

import { Text } from '@/components/Typography';
import { flexRow } from '@/styles/utils';

function ResponsiveImage({
  src,
  alt,
  width,
  height,
}: {
  src?: ImageProps['src'];
  alt?: ImageProps['alt'];
  width?: ImageProps['width'];
  height?: ImageProps['height'];
}) {
  if (!src || !alt) {
    throw new Error('ResponsiveImage: src 또는 alt props가 입력되지 않았습니다.');
  }

  return (
    <figure
      css={`
        display: grid;
        place-items: center;
      `}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        css={css`
          border-radius: ${({ theme }) => theme.radiuses[6]};
        `}
      />

      <figcaption
        css={css`
          ${flexRow('normal', 'center')}
          padding: 0 ${({ theme }) => theme.spacers[8]};
          margin-top: ${({ theme }) => theme.spacers[8]};
        `}
      >
        <Text as="span" fontSize={14} color="mauve11">
          {alt}
        </Text>
      </figcaption>
    </figure>
  );
}

export default ResponsiveImage;
