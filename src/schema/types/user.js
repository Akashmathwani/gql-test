import { gql } from "apollo-server-express";

export const userTypes = gql`
  interface User {
    id: ID!
    displayName: String
    email: String
    pets: [Pet]
    cars: [Car]
  }

  type UserType implements User {
    id: ID!
    displayName: String
    email: String
    pets: [Pet]
    cars: [Car]
  }

  extend type Query {
    user(id: ID!): UserType
  }

  extend type Query {
    users(ids: [ID!]!): [UserType]!
  }

  extend type Mutation {
    createUser(id: ID!): [User]!
  }
`;
