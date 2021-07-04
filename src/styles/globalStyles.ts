import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`        
    ${reset}
    *, *:before, *:after {
        box-sizing: border-box;
    }
    body { 
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; 
    }
    a {
     text-decoration: none;
     cursor: pointer;
    }

    ol, ul, li {
        list-style: none;
    }

    a:active,
    a:hover {
        outline: 0;
    }
    
    button {
        background-color: transparent;
        border: none;
        outline: none;
        appearance: none;
    }
`;

export default GlobalStyles;
