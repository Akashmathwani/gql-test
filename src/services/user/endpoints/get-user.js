import dotenv from "dotenv";
dotenv.config({ path: `./${process.env.NODE_ENV}.env` });

const GET_USER_SERVICE_ENDPOINT = process.env.GET_USER_SERVICE_ENDPOINT;
const GET_USER_SERVICE_PATH = process.env.GET_USER_SERVICE_PATH;

export default async function getUser(args, context) {
  const options = {
    hostname: GET_USER_SERVICE_ENDPOINT,
    path: GET_USER_SERVICE_PATH + `/${args.id}`,
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await context.makeRequest(options);
  return res?.data;
}
