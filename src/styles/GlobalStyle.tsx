import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

import { center } from "./utils/center";

const GlobalStyle = createGlobalStyle`
    ${normalize};
    
    html{
        line-height:1.5;
        scroll-padding-top: ${({ theme: { sizes, spacers } }) =>
          `calc(${sizes.headerHeight} + ${spacers[16]})`};
        background-color:${({ theme }) => theme.colors.mauve1};
        scroll-behavior: smooth;
    }

    body{
        color:${({ theme }) => theme.colors.mauve12};
        font-family:Untitled Sans, -apple-system, system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;

         background: radial-gradient(
            ellipse at 100% 100%,
            hsl(254 100% 6% / 0.07),
            ${({ theme }) => theme.colors.violet1},
            transparent),
            linear-gradient(
                to bottom right,
                ${({ theme }) => theme.colors.mint2},
                ${({ theme }) => theme.colors.indigo2},
                ${({ theme }) => theme.colors.pink3},
                ${({ theme }) => theme.colors.cyan3}
            );
    }

    *::selection{
        background-color:${({ theme }) => theme.colors.violet5};
        color:${({ theme }) => theme.colors.violet12};
    }

    ul,ol{
        list-style:none;
        margin:0;
        padding:0;
    }

    a{
        color:${({ theme }) => theme.colors.mauve11};
        text-decoration:none;
        cursor:pointer;

        &:hover{
            color:${({ theme }) => theme.colors.mauve12};
        }
    }

    button{
        ${center};
        cursor:pointer;
        background-color:transparent;
        color:inherit;
        border-color:transparent;
        border-radius:${({ theme }) => theme.radiuses[4]};

        &:disabled{
            cursor:not-allowed;
        }
    }
`;

export default GlobalStyle;
