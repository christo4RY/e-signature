import { createRouter, createWebHistory } from "vue-router";
import Register from "./../pages/Auth/Register.vue";

const routes = [
  {
    path: "/",
    name: "register",
    component: Register,
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
    name: "bulk-import",
    component: () => import("./../pages/Admin/Document/BulkImport.vue"),
  },
  {
    path: "/admin/document/upload",
    name: "document-upload",
    component: () => import("./../pages/Admin/Document/Upload.vue"),
  },
  {
    path: "/admin/document/send",
    name: "document-send",
    component: () => import("./../pages/Admin/Document/Send.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("./../pages/Profile.vue"),
  },
  {
    path: "/admin/document/google-drive",
    name: "google-drive",
    component: () => import("./../pages/Admin/Document/GoogleDrive.vue"),
  },
  {
    path: "/admin/department",
    name: "department",
    component: () => import("./../pages/Admin/Department/Index.vue"),
  },
  {
    path: "/admin/document/detail",
    name: "detail",
    component: () => import("./../pages/Admin/Document/Detail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
