import axios from "axios";

export default axios.create({
    baseURL: 'https://garson-be.herokuapp.com/api/v1/',
})