export default {
  Mutation: {},
  Query: {
    users: (root, args, context) => {
      return context.UserResources.getUsers();
    },
    user: (root, args, context) => {
      return context.UserResources.getUser();
    },
  },
};
