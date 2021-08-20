import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = (ssrMode: boolean = false) =>
  new ApolloClient({
    ssrMode,
    uri: "https://graphql-weather-api.herokuapp.com/",
    cache: new InMemoryCache(),
  });
