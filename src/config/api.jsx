import { API_BASE_URL, API_METHODS } from "../config/apiConstants";

const request = async (url, method = API_METHODS.GET, body = null) => {
  

  const options = { method, ...(body && { body: body }) };
 
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, options);

    return response.json();
  } catch (error) {
    console.log("API Error", error);
    throw error;
  }
};
export default request;

const addQueryParams = (url, query) => {
  if (!query || Object.keys(query).length === 0) return url;
  const queryString = new URLSearchParams(query).toString();
  return `${url}?${queryString}`;
};

export const getApi = (url, query = {}) => {
  const fullUrl = addQueryParams(url, query);
  return request(fullUrl, API_METHODS.GET);
};