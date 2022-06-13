import { AppProps } from 'next/app';
import { Layout } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  // Providers  -Context/Providers, Themes, Data
  // Layout
  // Props adicionales
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
