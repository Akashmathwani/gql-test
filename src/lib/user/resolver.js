export default {
  Mutation: {},
  Query: {
    users: (root, args, context) => {
      return context.UserResources.getUsers(args);
    },
    user: (root, args, context) => {
      return context.UserResources.getUser(args);
    },
  },
};
