import { createRouter, createWebHistory } from "vue-router";
import Home from "./../pages/Home.vue";
import Cookies from "js-cookie";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/Auth/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Auth/Login.vue"),
  },
  {
    path: "/admin/dashboard",
    name: "admin-dashboard",
    component: () => import("../pages/Admin/Dashboard.vue"),
  },
  {
    path: "/admin/approvement",
    name: "admin-approvement",
    component: () => import("./../pages/Admin/Approvement.vue"),
  },
  {
    path: "/admin/input",
    name: "admin-input",
    component: () => import("./../pages/Admin/Input.vue"),
  },
  {
    path: "/admin/send",
    name: "admin-send",
    component: () => import("./../pages/Admin/Send.vue"),
  },
  {
    path: "/admin/documents",
    name: "admin-documents",
    component: () => import("./../pages/Admin/Document/Index.vue"),
  },

  {
    path: "/admin/document/bulk-import",
    name: "admin-bulk-import",
    component: () => import("./../pages/Admin/Document/BulkImport.vue"),
  },
  {
    path: "/admin/document/upload",
    name: "admin-document-upload",
    component: () => import("./../pages/Admin/Document/Upload.vue"),
  },
  {
    path: "/admin/document/send",
    name: "admin-document-send",
    component: () => import("./../pages/Admin/Document/Send.vue"),
  },
  {
    path: "/admin/profile",
    name: "admin-profile",
    component: () => import("./../pages/Admin/Profile.vue"),
  },
  {
    path: "/user/profile",
    name: "user-profile",
    component: () => import("./../pages/User/Profile.vue"),
  },
  {
    path: "/admin/document/google-drive",
    name: "google-drive",
    component: () => import("./../pages/Admin/Document/GoogleDrive.vue"),
  },
  {
    path: "/admin/department",
    name: "admin-department",
    component: () => import("./../pages/Admin/Department/Index.vue"),
  },
  {
    path: "/admin/document/detail",
    name: "admin-detail",
    component: () => import("./../pages/Admin/Document/Detail.vue"),
  },
  {
    path: "/admin/signature",
    name: "admin-signature",
    component: () => import("./../pages/Admin/Signature/Index.vue"),
  },

  //user

  {
    path: "/user/documents",
    name: "user-documents",
    component: () => import("./../pages/User/Document/Index.vue"),
  },
  {
    path: "/user/document/bulk-import",
    name: "user-bulk-import",
    component: () => import("./../pages/User/Document/BulkImport.vue"),
  },
  {
    path: "/user/document/upload",
    name: "user-document-upload",
    component: () => import("./../pages/User/Document/Upload.vue"),
  },
  {
    path: "/user/document/send",
    name: "user-document-send",
    component: () => import("./../pages/User/Document/Send.vue"),
  },
  {
    path: "/user/send",
    name: "user-send",
    component: () => import("./../pages/User/Send.vue"),
  },
  {
    path: "/user/input",
    name: "user-input",
    component: () => import("./../pages/User/Input.vue"),
  },
  {
    path: "/user/document/google-drive",
    name: "user-google-drive",
    component: () => import("./../pages/User/Document/GoogleDrive.vue"),
  },
  {
    path: "/user/signature",
    name: "user-signature",
    component: () => import("./../pages/User/Signature/Index.vue"),
  },
  {
    path: "/user/document/detail",
    name: "user-detail",
    component: () => import("./../pages/User/Document/Detail.vue"),
  },
  {
    path: "/admin/not-found",
    name: "admin-not-found",
    component: () => import("./../pages/Admin/Error.vue"),
  },

  {
    path: "/user/not-found",
    name: "user-not-found",
    component: () => import("./../pages/User/Error.vue"),
  },

  {
    path: "/:pathMatch(.*)",
    name: "error",
    beforeEnter: (to, from, next) => {
      if (Cookies.get("name") == "admin") {
        console.log("hit");
        next({ name: "admin-not-found" });
      } else if (Cookies.get("name") == "user") {
        next({ name: "user-not-found" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
