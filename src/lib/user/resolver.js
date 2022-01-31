export default {
  Mutation: {},
  Query: {
    users: async (root, args, context) => {
      const userIdVsInfoMap = await context.UserResources.getUsers(args);
      return args.ids.map((id) => {
        const userData = userIdVsInfoMap.get(id);
        if (!userData) {
          return {
            __typename: "UserNotFoundError",
            message: `The user with the id ${id} does not exist.`,
          };
        }
        return userData;
      });
    },
    user: async (root, args, context) => {
      const user = await context.UserResources.getUser(args);
      if (!user) {
        return {
          __typename: "UserNotFoundError",
          message: `The user with the id ${args.id} does not exist.`,
        };
      }
      return user;
    },
  },
};
