import axios from "axios"


// consume API
export const findAll = async() => {

    try {
        const response = await axios.get('http://localhost:8080/users');
        return response;
    } catch (error) {
        console.log(error);
    }

    return null; 

}