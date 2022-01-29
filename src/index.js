import startApolloServer from "./apollo-server.js";
import combinedTypeDefs from "./schema/schema.js";

startApolloServer(combinedTypeDefs, []);
