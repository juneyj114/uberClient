import { gql, Resolvers } from "apollo-boost";
import { ApolloCache } from "apollo-cache";

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    isLoggedOut: Boolean!
  }

  extend type Mutation {
    logUserIn(token: String): any
    logUserOut: any
  }
`;

type ResolverFn = (
  parent: any,
  args: any,
  { cache }: { cache: ApolloCache<any> }
) => any;

interface ResolverMap {
  [field: string]: ResolverFn;
}

interface AppResolvers extends Resolvers {
  Mutation: ResolverMap;
}

export const resolvers: AppResolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("jwt", token);
      cache.writeData({
        data: {
          auth: {
            __typename: "Auth",
            isLoggedIn: true
          }
        }
      });
      return true;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("jwt");
      cache.writeData({
        data: {
          auth: {
            __typename: "Auth",
            isLoggedIn: false
          }
        }
      });
      return true;
    }
  }
};
