// Custom modules
import http from "./httpService";
import { apiLocationURL } from "./config.json";

export async function getData() {
  // This is an array of profiles for each person on the about page
  const results = await http.get(apiLocationURL);
  return results.data;
}

export default {
  getData,
};
