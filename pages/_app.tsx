import '@/styles/globals.css';
import { Provider } from '@self.id/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider client={{ ceramic: 'testnet-clay' }}>
      <Component {...pageProps} />
    </Provider>
  );
}
