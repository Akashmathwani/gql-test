import { gql } from "apollo-server-express";

export const userTypes = gql`
  type UserType {
    id: ID!
    displayName: String
    email: String
    pets: [Pet]
    cars: [Car]
  }

  type UserNotFoundError {
    message: String!
  }

  union UserResult = UserType | UserNotFoundError

  extend type Query {
    user(id: ID!): UserResult
  }

  extend type Query {
    users(ids: [ID!]!): [UserResult]!
  }
`;
