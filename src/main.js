import scss from './assets/sass/app.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

import App from './components/App.vue';

import Home from './components/Home.vue';
import Gallery from './components/Gallery.vue';
import About from './components/About.vue';

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/gallery',
        component: Gallery
    },
    {
        path: '/about',
        component: About
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
