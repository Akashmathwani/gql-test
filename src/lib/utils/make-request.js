import axios from "axios";

export default async function makeRequest(options) {
  console.log(`Outgoing Request for ${options.hostname + options.path}`);

  try {
    switch (options.method) {
      case "get":
        return await axios.get(options.hostname + options.path, {
          headers: options?.headers,
        });
      case "post":
        return await axios.post(options.hostname + options.path, {
          headers: options?.headers,
        });
    }
  } catch (error) {
    //TODO Can be handled better here
    try {
      console.log(error.toJSON());
    } catch (e) {
      console.log(error);
    }
    return null;
  }
}
