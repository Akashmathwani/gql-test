import { gql } from "apollo-server-express";

export const petTypes = gql`
  type Pet {
    id: String
    name: String
    type: String
    age: Int
    userId: String
  }
`;
