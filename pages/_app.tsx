import { Layout } from 'components';
import { AppProps } from 'next/app';

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
