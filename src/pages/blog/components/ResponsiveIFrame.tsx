import styled from 'styled-components';

import React, { IframeHTMLAttributes } from 'react';

interface ResponsiveIFrameProps extends IframeHTMLAttributes<HTMLIFrameElement> {}

function ResponsiveIFrame({
  allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  allowFullScreen = true,
  ...props
}: ResponsiveIFrameProps) {
  return (
    <IFrameWrapper>
      <iframe allow={allow} allowFullScreen={allowFullScreen} {...props} />
    </IFrameWrapper>
  );
}

const IFrameWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export default ResponsiveIFrame;
