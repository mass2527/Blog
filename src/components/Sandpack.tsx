import styled, { css } from 'styled-components';
import type { SandpackFiles, SandpackPredefinedTemplate } from '@codesandbox/sandpack-react';
import { SandpackCodeEditor, SandpackConsole, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react';

import { useState } from 'react';

import { Flex } from '@/layouts/Flex';
import { darkTheme } from '@/styles/theme';

const THEME = {
  colors: {
    surface1: 'transparent',
    surface2: darkTheme.colors.mauve6,
    surface3: 'transparent',
    clickable: darkTheme.colors.mauve11,
    base: '#323232', // ??
    disabled: '#C5C5C5', // ??
    hover: darkTheme.colors.mauve12,
    accent: darkTheme.colors.mauve12,
  },
  syntax: {
    plain: darkTheme.colors.mauve12,
    comment: {
      color: darkTheme.colors.mauve10,
      fontStyle: 'italic',
    },
    keyword: darkTheme.colors.blue11,
    tag: darkTheme.colors.blue11,
    punctuation: darkTheme.colors.blue11,
    definition: darkTheme.colors.blue11,
    property: darkTheme.colors.blue11,
    static: darkTheme.colors.cyan11,
    string: darkTheme.colors.cyan11,
  },
  font: {
    body: '-apple-system, system-ui, sans-serif',
    mono: 'Söhne Mono, menlo, monospace',
    size: '14px',
    lineHeight: '21px',
  },
} as const;

type ResultTab = 'preview' | 'console';
const TAB_BUTTONS: ResultTab[] = ['preview', 'console'];

function Sandpack({ template = 'react', files }: { template?: SandpackPredefinedTemplate; files: SandpackFiles }) {
  const [resultTab, setResultTab] = useState<ResultTab>('preview');

  return (
    <SandpackWrapper>
      <SandpackProvider template={template} files={files} theme={THEME}>
        <SandpackCodeEditor />

        <div>
          <ResultHeader alignItems="center">
            {TAB_BUTTONS.map(name => (
              <TabButton key={name} type="button" onClick={() => setResultTab(name)} isActive={resultTab === name}>
                {name}
              </TabButton>
            ))}
          </ResultHeader>

          <ResultWrapper>
            <div
              css={`
                > div {
                  transition: opacity ease-in-out 0.2s;
                }
              `}
            >
              <SandpackPreview
                showRefreshButton
                css={css`
                  opacity: ${resultTab === 'preview' ? 1 : 0};
                `}
              />
              <SandpackConsole
                showHeader={false}
                css={css`
                  z-index: ${resultTab === 'console' ? 3 : -1};
                  position: absolute;
                  inset: 0;
                  padding: ${({ theme }) => theme.spacers[8]};
                  opacity: ${resultTab === 'console' ? 1 : 0};
                `}
              />
            </div>
          </ResultWrapper>
        </div>
      </SandpackProvider>
    </SandpackWrapper>
  );
}

const SandpackWrapper = styled.div`
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.mauve6};
  border-radius: ${({ theme }) => theme.radiuses[8]};
  margin-bottom: ${({ theme }) => theme.spacers[16]};

  .sp-editor {
    height: 500px;
  }
`;

const ResultHeader = styled(Flex)`
  height: 40px;
  background-color: transparent;
  border-top: 1px solid ${({ theme }) => theme.colors.mauve6};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mauve6};
  padding: 0 ${({ theme }) => theme.spacers[8]};
`;

const TabButton = styled.button<{ isActive: boolean }>`
  color: ${({ isActive, theme: { colors } }) => (isActive ? colors.mauve12 : colors.mauve11)};
  text-transform: capitalize;

  &:hover {
    color: ${({ theme }) => theme.colors.mauve12};
  }
`;

const ResultWrapper = styled.div`
  height: 360px;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radiuses[8]};
  padding: ${({ theme }) => theme.spacers[16]};

  > div {
    height: 100%;
    position: relative;

    .sp-preview {
      height: 100%;

      .sp-preview-container {
        border-radius: ${({ theme }) => theme.radiuses[4]};
      }
    }
  }
`;

export default Sandpack;
