const Home = () => import('views/home/index.vue')
const Countryside = () => import('views/home/countryside.vue')

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/countryside',
        component: Countryside
    }
]
export default routes