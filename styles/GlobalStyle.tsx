import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize};
    
    html{
        line-height:1.3;
    }

    body{
        background-color:${({ theme }) => theme.colors.black1};
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
`;

export default GlobalStyle;
