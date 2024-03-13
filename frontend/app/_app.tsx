import {AuthProvider} from '@/context/authContext';
import PersistLogin from './_HOC/PersistLogin';

function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
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