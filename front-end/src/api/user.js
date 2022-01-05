import axios from "axios";

const loginUser = (username, password) => {
    return new Promise(function (resolve, reject) {
        axios.post('http://localhost:8080/api/user/login', {
            "username": username,
            "password": password
        }).then(res => {
            resolve(res.data);
        }).catch((error) => {
            let errorOutput = "";
            if (error.response) {
                errorOutput = `Error ${error.response.status}: ${error.response.data["response"]}`;
            } else if (error.request) {
                errorOutput = `Error: ${error.request}`;
            } else {
                errorOutput = `Error: ${error.response}`;
            }
            reject(errorOutput);
        })
    })
}

export {
    loginUser
};