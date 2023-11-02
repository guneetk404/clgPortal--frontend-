import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/user/HomePage.vue";
import DashBoard from "./pages/user/DashBoard.vue";
import TheHeader from "./components/TheHeader.vue";
import StudentProfile from "./pages/user/StudentProfile.vue";
import extraFile from "./pages/user/extraFile.vue";
import studentEnquiry from "./pages/user/studentEnquiry.vue";
import Announcement from "./pages/user/AnnouncementPage.vue";
import studentDocuments from "./pages/user/StudentDocuments.vue";
import FeedbackForm from "./pages/user/FeedbackForm.vue";


//admin pages 
import AdminHeader from "./components/AdminHeader.vue"
import AdminHome from "./pages/adminPages/HomePage.vue"
import AdminAnnouncement from "./pages/adminPages/TheAnnouncement.vue"
import AdminEnquiry from "./pages/adminPages/AdminEnquiry.vue"
import AdminFeedback from "./pages/adminPages/AdminFeedback.vue"
import RegisterStudent from "./pages/adminPages/registerStudent.vue"
import AllStudents from "./pages/adminPages/AllStudents.vue"
import PostDocumnets from "./pages/adminPages/PostDocuments.vue"

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
    path: "/announcement",
    component: TheHeader, // Use your layout component
    children: [
      {
        path: "",
        component: Announcement, // This component will be displayed in the router-view
      },
    ],
  },
  {
    path: "/dashboard",
    component: TheHeader, // Use your layout component
    children: [
      {
        path: "",
        component: DashBoard, // This component will be displayed in the router-view
      },
    ],
  },
  {
    path: "/profile",
    component: TheHeader, // Use your layout component
    children: [
      {
        path: "",
        component: StudentProfile, // This component will be displayed in the router-view
      },
    ],
  },
  {
    path: "/enquiry",
    component: TheHeader, // Use your layout component
    children: [
      {
        path: "",
        component: studentEnquiry, // This component will be displayed in the router-view
      },
    ],
  },
  {
    path: "/documents",
    component: TheHeader, // Use your layout component
    children: [
      {
        path: "",
        component: studentDocuments, // This component will be displayed in the router-view
      },
    ],
  },
  {
    path: "/feedback",
    component: TheHeader, // Use your layout component
    children: [
      {
        path: "",
        component: FeedbackForm, // This component will be displayed in the router-view
      },
    ],
  },

  // admin routes here
  {
    path: "/admin",
    component: AdminHeader, // Use your layout component
    children: [
      {
        path: "",
        component: AdminHome, // This component will be displayed in the router-view
      },
    ],
  },
  {
    path: "/admin-announcement",
    component: AdminHeader,
    children:[
      {
        path:"",
        component:AdminAnnouncement
      }
    ]
  },
  {
    path: "/admin-enquiry",
    component: AdminHeader,
    children:[
      {
        path:"",
        component:AdminEnquiry
      }
    ]
  },
  {
    path: "/admin-feedback",
    component: AdminHeader,
    children:[
      {
        path:"",
        component:AdminFeedback
      }
    ]
  },
  {
    path: "/admin-all-users",
    component: AdminHeader,
    children:[
      {
        path:"",
        component:AllStudents
      }
    ]
  },
  {
    path: "/admin-register",
    component: AdminHeader,
    children:[
      {
        path:"",
        component:RegisterStudent
      }
    ]
  },
  {
    path: "/admin/post-documents",
    component: AdminHeader,
    children:[
      {
        path:"",
        component:PostDocumnets
      }
    ]
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
