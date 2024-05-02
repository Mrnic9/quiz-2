import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import ClientePage from '../views/ClientePage.vue'
import Empleado from '@/views/Empleado.vue';
import HomePage from '@/views/HomePage.vue';
import EstudiantePage from '@/views/EstudiantePage.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/cliente',
    name: 'Cliente',
    component: ClientePage
  },{
    path: '/empleado',
    name: 'empleado',
    component: Empleado

  },{
    path: '/estudiante',
    name: 'estudinate',
    component: EstudiantePage

  },{
    path: '/home',
    name: 'home',
    component: HomePage

  },
  
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router