import 'styles/index.css';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import Root from 'common/containers/root';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}

export default MyApp;
