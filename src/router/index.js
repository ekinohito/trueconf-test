import Vue from 'vue'
import VueRouter from 'vue-router'
import TrafficLight from "@/components/TrafficLight";

Vue.use(VueRouter)

const routes = [
    {
        path: '/red',
        name: 'Red',
        component: TrafficLight,
        props: {isRedOn: true}
    },
    {
        path: '/yellow',
        name: 'Yellow',
        component: TrafficLight,
        props: {isYellowOn: true}
    },
    {
        path: '/green',
        name: 'Green',
        component: TrafficLight,
        props: {isGreenOn: true}
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
