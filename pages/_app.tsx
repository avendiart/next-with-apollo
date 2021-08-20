import "../styles/globals.css";
import { AppProps } from "next/app";

const Application = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default Application;
