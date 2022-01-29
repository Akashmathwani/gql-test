import axios from "axios";

export default async function makeRequest(options) {
  console.log(options);
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response;
  } catch (error) {
    console.error(error);
    //TODO Control error here : make a relation
    return error;
  }
}
