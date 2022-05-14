import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './utils/createEmotionCache';
import { CartContextProvider } from './contexts/CartItemsContext'

const clientSideEmotionCache = createEmotionCache();

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CacheProvider value={clientSideEmotionCache}>
    <CartContextProvider>
      <QueryClientProvider client={queryClient} >
        <App />
      </QueryClientProvider>
    </CartContextProvider>
  </CacheProvider>
);
