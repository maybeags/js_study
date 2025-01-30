import axios from 'axios';

const API_version = "/api/v1"

const fetchGetData = (uri) => {
  const url = `${API_version}${uri}`;
  return axios.get(url)
    .catch(error => {
      // Handle exceptions/errors
      console.error('Error fetching data for URL:', url, 'Error', error.message);
      // You can throw the error again if you want to handle it elsewhere
      throw error;
    });
};

const fetchPostData = (uri, payload) => {
  const url = `${API_version}${uri}`;
  return axios.post(url, payload)
    .catch(error => {
      // Handle exceptions/errors
      console.error('Error fetching data for URL:', url, 'Error', error.message);
      // You can throw the error again if you want to handle it elsewhere
      throw error;
    });
};

const fetchPostDataWithAuth = (uri, payload) => {

  const token = localStorage.getItem('token');

  const url = `${API_version}${uri}`;
  return axios.post(url, payload, {headers: {
    "accept": "*/*",
    "Content-Type": "application/json",
     "Authorization": `Bearer ${token}`,
  },
})
    .catch(error => {
      // Handle exceptions/errors
      console.error('Error fetching data for URL:', url, 'Error', error.message);
      // You can throw the error again if you want to handle it elsewhere
      throw error;
    });
};

export default fetchGetData;
export { fetchPostData, fetchPostDataWithAuth };