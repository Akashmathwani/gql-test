import { gql } from "apollo-server-express";

export const carTypes = gql`
  type Car {
    id: String
    name: String
    description: String
    purchased: String
    userId: String
  }
`;
