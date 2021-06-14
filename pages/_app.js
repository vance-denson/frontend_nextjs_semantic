import "../styles/globals.css";
import Navbar from "../components/Navbar";
import "semantic-ui-css/semantic.min.css";
import Head from "next/Head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
