import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vuejs-toolset.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
