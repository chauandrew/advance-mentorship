import axios from "axios"

var prefix = "https://advancementorship.herokuapp.com/"
// prefix = "http://localhost:4000" // uncomment for local testing

export default {
    getCampuses: async function () {
        return (await axios.get(`${prefix}/api/v1/campus`)).data
    }
}