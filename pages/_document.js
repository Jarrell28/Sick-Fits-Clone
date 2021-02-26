import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

//Root Document page to implement Global styles/Head attributes
export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags }
    }
    render() {
        return (
            <Html lang="en-US">
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}