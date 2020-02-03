import axios from 'axios'
import router from '@/router'

console.log()

const VueAxios = axios.create({
    baseURL: `http://localhost:3000/`,
    headers: {
        'Content-Type': 'application/json',
    },
})

VueAxios.interceptors.response.use((response) => response, (error) => {
    console.log(error.response)
    if (error.response) {
        if (error.response.status == 404) {
            console.log(error)
            router.push({
                name: 'Page404'
            })
        }
    } else {
        console.log(error.response)
    }

});

export default VueAxios