import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{}],
    scrollBehavior: function (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
})