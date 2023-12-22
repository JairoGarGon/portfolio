import { createRouter, createWebHistory } from 'vue-router';
import HomeComponente from '../componentes/HomeComponente.vue';
import ConocemeComponente from '../componentes/ConocemeComponente.vue';
import FormacionComponente from '../componentes/FormacionComponente.vue';
import ContactoComponente from '../componentes/ContactoComponente.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponente,
  },
  {
    path: '/conoceme',
    name: 'Conoceme',
    component: ConocemeComponente,
  },
  {
    path: '/formacion',
    name: 'Formacion',
    component: FormacionComponente,
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: ContactoComponente,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
