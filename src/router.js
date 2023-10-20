import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import DashBoard from "./pages/DashBoard.vue";
import TheHeader from './components/TheHeader.vue'
import StudentProfile from './pages/StudentProfile.vue'
import extraFile from './pages/extraFile.vue'

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/dash",
    component: DashBoard,
  },
  {
    path: "/n",
    component: extraFile,
  },
  {
    path: '/d',
    component: TheHeader, // Use your layout component
    children: [
      {
        path: '',
        component: DashBoard, // This component will be displayed in the router-view
      },
    ],
  },
  {
    path: '/profile',
    component: TheHeader, // Use your layout component
    children: [
      {
        path: '',
        component: StudentProfile, // This component will be displayed in the router-view
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
