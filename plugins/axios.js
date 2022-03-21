import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development'
  ? 'http://localhost:5001/univdev-resume/us-central1/api'
  : 'https://us-central1-univdev-resume.cloudfunctions.net/api';

export default axios;