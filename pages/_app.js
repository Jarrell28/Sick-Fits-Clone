import NProgress from 'nprogress';
import Page from "../components/Page";
import Router from 'next/router';
import withData from '../lib/withData';
import { CartStateProvider } from '../lib/cartState';

//NPProgress is for the loader when changing pages
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// TODO: Swap with own css
import '../components/styles/nprogress.css';
//Wrap component in ApolloProvider 
import { ApolloProvider } from '@apollo/client';

function myApp({ Component, pageProps, apollo }) {
    return (
        <ApolloProvider client={apollo}>
            <CartStateProvider>
                <Page>
                    <Component {...pageProps} />
                </Page>
            </CartStateProvider>
        </ApolloProvider>
    )
}

myApp.getInitialProps = async function ({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;
    return { pageProps };
}

export default withData(myApp);