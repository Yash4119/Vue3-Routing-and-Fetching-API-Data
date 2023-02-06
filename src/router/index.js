import HomeView from "../components/HomeView.vue"
import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'HomeView',
            component:HomeView
        }
    ]
})

export default router