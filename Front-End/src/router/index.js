import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cadastro from '../views/Cadastro.vue';
import Edit from '../views/Edit.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    }
  ]
})

export default router
