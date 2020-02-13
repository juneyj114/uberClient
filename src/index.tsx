import React from "react";
import ReactDOM from "react-dom";
import App from "./Component/App";
import { ApolloProvider } from "@apollo/react-hooks";
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  ApolloLink,
  from,
  HttpLink
} from "apollo-boost";
import { resolvers, typeDefs } from "./resolvers";
import GlobalStyle from "./global-styles";

const authMiddleware = new ApolloLink((operation, forward) => {
  console.log(operation.getContext());
  return forward(operation);
});

const httpLink = new HttpLink({ uri: "/" });

const cache = new InMemoryCache();
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  resolvers,
  typeDefs,
  link: from([authMiddleware, httpLink])
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
