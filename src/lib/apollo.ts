import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ptancz2abd01xt5be53jrh/master",
  cache: new InMemoryCache(),
});
