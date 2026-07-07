import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Admin',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: ['admin'],
        subMenu: [],
    },
    {
        key: 'apps',
        path: '',
        title: 'Apps',
        translateKey: 'nav.apps.apps',
        icon: '',
        type: NAV_ITEM_TYPE_TITLE,
        authority: ['admin'],
        subMenu: [
            {
                key: 'apps.projects',
                path: '',
                title: 'Projects',
                translateKey: 'nav.apps.projects.projects',
                icon: 'projects',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: ['admin'],
                subMenu: [
                    {
                        key: 'apps.projects.axieInfinity',
                        path: '/apps/projects/axie-infinity',
                        title: 'Axie Infinity',
                        translateKey: 'nav.apps.projects.axieInfinity',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: ['admin'],
                        subMenu: [],
                    },
                    {
                        key: 'apps.projects.pixelsOnline',
                        path: '/apps/projects/pixels-online',
                        title: 'Pixels Online',
                        translateKey: 'nav.apps.projects.pixelsOnline',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: ['admin'],
                        subMenu: [],
                    },
                    {
                        key: 'apps.projects.sunflowerLand',
                        path: '/apps/projects/sunflower-land',
                        title: 'Sunflower Land',
                        translateKey: 'nav.apps.projects.sunflowerLand',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: ['admin'],
                        subMenu: [],
                    },
                ],
            },
        ],
    },
]

export default navigationConfig
