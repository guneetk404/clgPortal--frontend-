import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import DashBoard from "./pages/DashBoard.vue";
import TheHeader from './components/TheHeader.vue'
import StudentProfile from './pages/StudentProfile.vue'
import extraFile from './pages/extraFile.vue'
import studentEnquiry from './pages/studentEnquiry.vue'
import Announcement from './pages/AnnouncementPage.vue'

const routes = [
  {
    path: "/",
    component: HomePage,
  },
 
  {
    path: "/n",
    component: extraFile,
  },
  {
    path: '/announcement',
    component: TheHeader, // Use your layout component
    children: [
      {
        path: '',
        component: Announcement, // This component will be displayed in the router-view
      },
    ],
  },
  {
    path: '/dashboard',
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
  {
    path: '/enquiry',
    component: TheHeader, // Use your layout component
    children: [
      {
        path: '',
        component: studentEnquiry, // This component will be displayed in the router-view
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
