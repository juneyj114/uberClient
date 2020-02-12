import React from "react";
import ReactDOM from "react-dom";
import App from "./Component/App";
import { ApolloProvider } from "@apollo/react-hooks";
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache
} from "apollo-boost";
import { resolvers, typeDefs } from "./resolvers";
import GlobalStyle from "./global-styles";

const cache = new InMemoryCache();
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  resolvers,
  typeDefs
});

cache.writeData({
  data: {
    auth: {
      __typename: "Auth",
      isLoggedIn: Boolean(localStorage.getItem("jwt"))
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
