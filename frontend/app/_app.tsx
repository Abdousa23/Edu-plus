import { useState } from 'react';
import {AuthProvider} from '@/context/authContext';

function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return <AuthProvider>
    {getLayout(<Component {...pageProps} />)}
  </AuthProvider>
    
}

export default MyApp;