import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
  LiveProviderProps,
} from "react-live";

import React from "react";

import Pre from "./Pre";
import Preview from "./Preview";

const DEFAULT_THEME = { plain: {}, styles: [] };

function Live({
  code,
  noInline = true,
  theme = DEFAULT_THEME,
}: {
  code: LiveProviderProps["code"];
  noInline: LiveProviderProps["noInline"];
  theme: LiveProviderProps["theme"];
}) {
  return (
    <LiveProvider code={code} noInline={noInline} theme={theme}>
      <Pre>
        <LiveEditor />
      </Pre>
      <Preview>
        <LiveError />
        <LivePreview />
      </Preview>
    </LiveProvider>
  );
}

export default Live;
