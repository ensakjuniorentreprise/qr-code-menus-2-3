import axios from "axios";

export default axios.create({
    baseURL: 'https://qr-code-menus-be.azurewebsites.net/api/v1/',
})