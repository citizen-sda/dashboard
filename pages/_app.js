import '../styles/globals.css';
import Sidebar from '../components/sidebar';

function MyApp({ Component, pageProps }) {
  return (
    <Sidebar>
      <div className="sm:px-16 px-6 sm:py-16 py-6 bg-gray-100">
        <Component {...pageProps} />
      </div>
    </Sidebar>
  );
}

export default MyApp;
