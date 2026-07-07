export type ProjectKey = 'axieInfinity' | 'pixelsOnline' | 'sunflowerLand'

export type Project = {
    key: ProjectKey
    name: string
    slug: string
    status: string
    apiNamespace: string
    description: string
    metrics: {
        label: string
        value: string
    }[]
}

export const projects: Record<ProjectKey, Project> = {
    axieInfinity: {
        key: 'axieInfinity',
        name: 'Axie Infinity',
        slug: 'axie-infinity',
        status: 'Ready for admin API wiring',
        apiNamespace: 'axie',
        description:
            'Manage Axie Infinity helpers, inventory syncs, and future game data operations.',
        metrics: [
            { label: 'API namespace', value: 'axie' },
            { label: 'Access', value: 'Admin only' },
            { label: 'Token scope', value: 'admin:api' },
        ],
    },
    pixelsOnline: {
        key: 'pixelsOnline',
        name: 'Pixels Online',
        slug: 'pixels-online',
        status: 'Ready for admin API wiring',
        apiNamespace: 'pixels',
        description:
            'Manage Pixels Online tools, land data, quests, and admin-only sync tasks.',
        metrics: [
            { label: 'API namespace', value: 'pixels' },
            { label: 'Access', value: 'Admin only' },
            { label: 'Token scope', value: 'admin:api' },
        ],
    },
    sunflowerLand: {
        key: 'sunflowerLand',
        name: 'Sunflower Land',
        slug: 'sunflower-land',
        status: 'Ready for admin API wiring',
        apiNamespace: 'sunflower',
        description:
            'Manage Sunflower Land helper updates, bearer-token workflows, and inventory actions.',
        metrics: [
            { label: 'API namespace', value: 'sunflower' },
            { label: 'Access', value: 'Admin only' },
            { label: 'Token scope', value: 'admin:api' },
        ],
    },
}
