import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

import { center } from "./utils/center";

const GlobalStyle = createGlobalStyle`
    ${normalize};
    
    html{
        line-height:1.5;
        scroll-padding-top: ${({ theme }) => theme.sizes.headerHeight};
    }

    body{
        background-color:${({ theme }) => theme.colors.black1};
        color:${({ theme }) => theme.colors.black12};
        font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;     
    }

    *::selection{
        background-color:${({ theme }) => theme.colors.crimson5};
        color:${({ theme }) => theme.colors.black12};
    }

    h1{
        font-size:${({ theme }) => theme.fontSizes[32]};
    }
    h2{
        font-size:${({ theme }) => theme.fontSizes[24]};
    }
    h3{
        font-size:${({ theme }) => theme.fontSizes[20]};
    }

    ul{
        list-style:none;
        margin:0;
        padding:0;
    }

    a{
        color:${({ theme }) => theme.colors.gray11};
        text-decoration:none;
        cursor:pointer;

        &:hover{
            color:${({ theme }) => theme.colors.gray12};
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
    
    time{
        font-size:${({ theme }) => theme.fontSizes[14]};
        font-weight:${({ theme }) => theme.fontWeights[400]};
        color:${({ theme }) => theme.colors.gray11};
    }
`;

export default GlobalStyle;
