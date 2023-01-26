import { NextPage } from 'next';
import '../styles/globals.css';
import React, { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';

type NextTypeWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextTypeWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}
