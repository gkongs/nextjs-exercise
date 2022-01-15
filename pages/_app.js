// import Layout from '../components/Layout';
import { GlobalStyle } from '../styles/global';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </div>
  );
}
