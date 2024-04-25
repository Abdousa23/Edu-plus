import {AuthProvider} from '@/context/authContext';
import { SocketContextProvider } from '@/context/SocketContext';
import PersistLogin from './_HOC/PersistLogin';
import Head from 'next/head';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
 
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('Service worker registered:', registration)
          })
          .catch(error => {
            console.error('Service worker registration failed:', error)
          })
      })
    }
  }, [])
 
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