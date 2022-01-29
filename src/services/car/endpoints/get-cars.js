import dotenv from "dotenv";
dotenv.config({ path: `./${process.env.NODE_ENV}.env` });

const GET_CAR_SERVICE_ENDPOINT = process.env.GET_CAR_SERVICE_ENDPOINT;
const GET_CAR_SERVICE_PATH = process.env.GET_CAR_SERVICE_PATH;

export default async function getCars(args, context) {
  const options = {
    hostname: GET_CAR_SERVICE_ENDPOINT,
    path: GET_CAR_SERVICE_PATH,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await context.makeRequest(options);
  return res?.data;
}
