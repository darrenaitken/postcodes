// Custom modules
import http from "./httpService";
import { apiLocationURL } from "./config.json";

export async function getData(postcode) {
  // This is an array of profiles for each person on the about page
  const results = await http.get(apiLocationURL, {
    params: { postcode: postcode },
  });
  return results.data;
}

export default getData;
