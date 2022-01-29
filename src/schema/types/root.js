import { gql } from "apollo-server-express";

export const rootTypes = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;
