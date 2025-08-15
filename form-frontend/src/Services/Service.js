import axios from "axios";

// connect the back-end using the axios  - this a spring localhost url
const API = 'http://localhost:8080'


export const createUser = (user) => axios.post(API,user);