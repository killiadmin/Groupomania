import home from '../pages/home/pageHome.vue';
import login from '../pages/pageLogin.vue';
import profil from '../pages/pageProfil.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: login },
    { path: '/home', component: home },
    { path: '/profil', component: profil}
];

const router = createRouter({
    history : createWebHistory(), routes
});

export default router;