import type { AppProps } from 'next/app';
import Layout from '../layouts/Layout';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import 'styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
