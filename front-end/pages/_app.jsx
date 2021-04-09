import "../styles/globals.css";

import PageWrapper from "../components/layout/PageWrapper";

function MainApp({ Component, pageProps }) {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  );
}

export default MainApp;
