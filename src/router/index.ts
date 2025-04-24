import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import InformationComponent from '@/components/InformationComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage, // Route for the ProjectsPage
    },
    {
      path: '/home-info',
      name: 'home-info',
      component: InformationComponent, // This route is for the InformationComponent
    },
  ],
})

export default router
