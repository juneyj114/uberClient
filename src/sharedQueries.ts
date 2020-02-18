import { gql } from "apollo-boost";

export const LOG_USER_IN = gql`
  mutation logUserIn($token: string!) {
    logUserIn(token: $token) @client
  }
`;

export const LOG_USER_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;
