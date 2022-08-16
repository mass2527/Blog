import styled from "styled-components";

import React from "react";

import { Flex } from "../Flex";

import AudioPlayer from "./AudioPlayer";

function GlobalFooter() {
  return (
    <Flex>
      <Footer>
        <AudioPlayer />
      </Footer>
    </Flex>
  );
}

const Footer = styled.footer`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  width: 100%;
  margin: auto;
  padding: ${({ theme }) => theme.spacers[24]};
  font-size: ${({ theme }) => theme.fontSizes[12]};
`;

export default GlobalFooter;
