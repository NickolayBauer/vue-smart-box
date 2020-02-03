import axios from 'axios'
import router from '@/router'

const VueAxios = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
})

VueAxios.interceptors.response.use((response) => response, (error) => {
    if (error.response) {
        if (error.response.status == 404) {
            router.push({
                name: 'Page404'
            })
        }
    }

});

export default VueAxios