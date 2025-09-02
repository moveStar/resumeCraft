/*
 * @Description: 
 * @Author: zhangweijuan
 * @Date: 2025-09-02 09:55:13
 * @LastEditTime: 2025-09-02 10:50:00
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ResumeEditorView from '../views/ResumeEditorView.vue';
import ResumePreviewView from '../views/ResumePreviewView.vue';
import TemplateLibraryView from '../views/TemplateLibraryView.vue';
import TutorialsView from '../views/TutorialsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/editor',
    name: 'editor',
    component: ResumeEditorView
  },
  {
    path: '/preview',
    name: 'preview',
    component: ResumePreviewView,
    props: (route) => ({ resumeData: route.query.resumeData })
  },
  {
    path: '/templates',
    name: 'templates',
    component: TemplateLibraryView
  },
  {
    path: '/tutorials',
    name: 'tutorials',
    component: TutorialsView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;