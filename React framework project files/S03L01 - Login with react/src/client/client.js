import axios from 'axios';

const fetchGetData = (url) => {
  return axios.get(url)
    .catch(error => {
      // Handle exceptions/errors
      console.error('Error fetching data for URL:', url, 'Error', error.message);
      // You can throw the error again if you want to handle it elsewhere
      throw error;
    });
};

export default fetchGetData;