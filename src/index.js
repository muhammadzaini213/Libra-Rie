import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home/Home.vue'
import About from './pages/About/About.vue'
import Catalog from './pages/Catalog/Catalog.vue'
import Details from './pages/Details/Details.vue'
import Events from './pages/Events/Events.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: "/catalog", component: Catalog },
  {
    path: "/details/:id",
    name: "Details",
    component: Details,
    props: true
  },
  { path: "/events", component: Events },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
