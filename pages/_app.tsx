import "../styles/globals.css";
import { useMemo } from "react";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { getClient } from "../src/graphql/client";

const Application = ({ Component, pageProps }: AppProps) => {
  const client = useMemo(() => getClient(false), []);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default Application;
