import { createRouter, createWebHistory } from 'vue-router';
import HomeComponente from '../componentes/HomeComponente.vue'; 
import ConocemeComponente from '../componentes/ConocemeComponente.vue'; 
import FormacionComponente from '../componentes/FormacionComponente.vue'; 
import ContactoComponente from '../componentes/ContactoComponente.vue'; 

const routes = [
  { path: '/', component: HomeComponente },
  { path: '/conoceme', component: ConocemeComponente },
  { path: '/formacion', component: FormacionComponente },
  { path: '/contacto', component: ContactoComponente },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;