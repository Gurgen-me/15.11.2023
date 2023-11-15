import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import('@/views/ChatView.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/LoginView.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/ProfileView.vue')
    },
    { path: '/:pathMatch(.*)*',
     name: 'NotFound', 
     component: () => import('@/views/NotFoundView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;