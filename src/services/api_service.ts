import axios from 'axios';
const apiBASE = process.env.REACT_APP_API;
const apiKEY = process.env.REACT_APP_API_KEY;

export const apiGetRequest = async (endPoint: string) => {
  try {
    const response = await axios.get(`${apiBASE}${endPoint}&${apiKEY}`);
    return response.data.results;
  } catch (error) {
    console.error(`Error request: endpoit ${endPoint}`, error);
    throw error;
  }
};
