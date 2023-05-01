//import axios
import axios from 'axios';

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://apiext-dev.id-trec.com'
})

export default Api