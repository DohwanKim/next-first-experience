import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layouts/Layout';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
