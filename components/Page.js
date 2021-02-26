import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Header from './Header';

//Global styles for whole application
const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2');
        format('woff2');
        font-weight: normal;
        font-style: normal;
    }


    html {
        --red: #ff0000;
        --black: #393939;
        --grey: #3A3A3A;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: #e1e1e1;
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);

        box-sizing: border-box;
        font-size: 10px;
    }

    *,*:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: 'radnika_next';
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height; 2;
    }

    a {
        text-decoration: none;
        color: var(--black);
    }

    a:hover {
        text-decoration: underline;
    }

    button {
        font-family: 'radnika_next';
    }
`;

const InnerStyles = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 2rem;
`;

//Root component page
//Global styles and components passed here
export default function Page({ children }) {
    return <div>
        <GlobalStyles />
        <Header />
        <InnerStyles>{children}</InnerStyles>

    </div>
}

Page.propTypes = {
    children: PropTypes.any
}