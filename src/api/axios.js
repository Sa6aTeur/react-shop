import axios from 'axios'


const sneakersApi = axios.create({
  baseURL: 'https://60d751b8307c300017a5f7eb.mockapi.io',
});

export default sneakersApi