export default {
  Mutation: {},
  Query: {
    users: (root, args, context) => {
      return [];
    },
    user: (root, args, context) => {
      return { displayName: "akash", name: "user" };
    },
  },
};
