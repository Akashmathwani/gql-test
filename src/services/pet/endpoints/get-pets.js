import dotenv from "dotenv";
dotenv.config({ path: `./${process.env.NODE_ENV}.env` });

const GET_PET_SERVICE_ENDPOINT = process.env.GET_PET_SERVICE_ENDPOINT;
const GET_PET_SERVICE_PATH = process.env.GET_PET_SERVICE_PATH;

export default async function getPets(args, context) {
  const options = {
    hostname: GET_PET_SERVICE_ENDPOINT,
    path: GET_PET_SERVICE_PATH,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await context.makeRequest(options);
  return res?.data;
}
