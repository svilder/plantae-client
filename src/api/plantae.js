import axios from 'axios';

export default axios.create({
  baseURL: 'https://plantae-plants-search.herokuapp.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Accept, Content-Type',
    'Access-Control-Allow-Credentials': 'true'
  }
});
