import 'styles/index.css';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import StoreProvider from '../store';

import Root from 'common/containers/root';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Root>
        <Component {...pageProps} />
      </Root>
    </StoreProvider>
  );
}

export default MyApp;
