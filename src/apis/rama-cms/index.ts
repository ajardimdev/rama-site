import { create } from "apisauce";


const api = create({
    baseURL: process.env.RAMA_CMS_API
})

api.addResponseTransform(response => {

    return response
})


export default api
