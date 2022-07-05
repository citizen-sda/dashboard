import '../styles/globals.css';
import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import { Toaster } from 'react-hot-toast';
import supabase from '../lib/supabase';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps, ...appProps }) {
  const router = useRouter();
  const [session, setSession] = useState(supabase.auth.session());

  React.useEffect(() => {
    setSession(supabase.auth.session());
    if (!session && ![`/`].includes(appProps.router.pathname)) {
      router.push('/');
    }
  }, []);

  if (router.pathname == '/')
    return (
      <>
        <Toaster />
        <Component {...pageProps} />
      </>
    );

  return (
    <>
      <Sidebar>
        <Toaster />
        <div className="sm:px-16 px-6 sm:py-16 py-6 bg-gray-100">
          <Component {...pageProps} />
        </div>
      </Sidebar>
    </>
  );
}

export default MyApp;
