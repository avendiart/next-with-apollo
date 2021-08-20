import { withApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const withClient = withApollo(
  new ApolloClient({
    uri: "https://graphql-weather-api.herokuapp.com/",
    cache: new InMemoryCache(),
  })
);
