import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/cliente'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/cliente'
      },
      {
        path: 'cliente',
        component: () => import('@/views/ClientePage.vue')
      },
      {
        path: 'estudiante',
        component: () => import('@/views/EstudiantePage.vue')
      }  ,
      {
        path: 'estudiante',
        component: () => import('@/views/Empleado.vue')
      } 
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
