import axios from 'axios';

export const requestPictures = async (query, page = 0) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: 'ZAaNiRr85M0RXnNByPpaYY9nNJthiXiS-Eu_I9Ujri4',
      query: query,
      page,
      per_page: 8,
      },
  });
  console.log(response.data)
  return response.data;
};
