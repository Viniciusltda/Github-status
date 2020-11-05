import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://kctbh9vrtdwd.statuspage.io/api/v2/components.json'

});

export default api;