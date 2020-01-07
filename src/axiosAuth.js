import axios from 'axios';

function axiosAuth(){
    return axios.create(
        {baseURL: "https://anywhere-fitness-bw.herokuapp.com/"}
    )
}

export default axiosAuth;