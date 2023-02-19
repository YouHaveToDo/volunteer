import 'styles/globals.css';

import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={client}>
    <Head>
      <title>Volunteer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <CssBaseline />
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default App;
