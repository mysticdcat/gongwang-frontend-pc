import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
const router = new VueRouter({
    mode: 'history',
    routes,

});



router.beforeEach((to, from, next) => {
    NProgress.start();
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

router.afterEach(to => {
    NProgress.done();
});


export default router;
