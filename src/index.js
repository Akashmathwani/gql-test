import startApolloServer from "./apollo-server.js";
import combinedTypeDefs from "./schema/schema.js";
import combinedResolvers from "./lib/resolvers.js";

startApolloServer(combinedTypeDefs, combinedResolvers);
