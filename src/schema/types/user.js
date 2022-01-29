import { gql } from "apollo-server-express";

export const userTypes = gql`
  interface User {
    id: ID
    displayName: String
    email: String
    pets: [Pet]
    cars: [Car]
  }

  extend type Query {
    user: [User]!
  }

  extend type Query {
    users: [User]!
  }

  extend type Mutation {
    createUser(id: ID!): [User]!
  }
`;
