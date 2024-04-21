import {AuthProvider} from '@/context/authContext';
import { SocketContextProvider } from '@/context/SocketContext';
import PersistLogin from './_HOC/PersistLogin';
import Head from 'next/head';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
 
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
          console.log('Service worker registered:', registration);
        }, (err) => {
          console.log('Service worker registration failed:', err);
        });
      });
    }else{
      console.log("it doesn't work")
    }
  }, []);
 
  return(
    
    <AuthProvider>
    <PersistLogin>
    {getLayout(
      <Component {...pageProps} />
    )}
  
    </PersistLogin>
    </AuthProvider> 
    )
  
}

export default MyApp;
// import '../styles/globals.css'
// import type { AppProps } from 'next/app'
// import PersistLogin from './_HOC/PersistLogin'

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <PersistLogin>
//       <Component {...pageProps} />
//     </PersistLogin>
//   )
// }
// export default MyApp