import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: ['admin'],
    },
    {
        key: 'apps.projects.axieInfinity',
        path: '/apps/projects/axie-infinity',
        component: lazy(() => import('@/views/projects/AxieInfinity')),
        authority: ['admin'],
    },
    {
        key: 'apps.projects.pixelsOnline',
        path: '/apps/projects/pixels-online',
        component: lazy(() => import('@/views/projects/PixelsOnline')),
        authority: ['admin'],
    },
    {
        key: 'apps.projects.sunflowerLand',
        path: '/apps/projects/sunflower-land',
        component: lazy(() => import('@/views/projects/SunflowerLand')),
        authority: ['admin'],
    },
]
