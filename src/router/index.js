import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue'; 
import ConocemeView from '@/views/ConocemeView.vue'; 
import FormacionView from '@/views/FormacionView.vue'; 
import ExperienciaView from '@/views/ExperienciaView.vue'; 
import ContactoView from '@/views/ContactoView.vue'; 

const routes = [
  { path: '/', component: HomeView },
  { path: '/conoceme', component: ConocemeView },
  { path: '/formacion', component: FormacionView },
  { path: '/experiencia', component: ExperienciaView },
  { path: '/contacto', component: ContactoView },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;