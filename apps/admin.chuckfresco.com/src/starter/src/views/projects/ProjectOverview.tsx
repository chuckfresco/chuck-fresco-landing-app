import Card from '@/components/ui/Card'
import type { Project } from './projectData'

type ProjectOverviewProps = {
    project: Project
}

const ProjectOverview = ({ project }: ProjectOverviewProps) => {
    return (
        <div className="space-y-6">
            <div>
                <div className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                    Apps / Projects
                </div>
                <h2 className="mb-2">{project.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
                    {project.description}
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                {project.metrics.map((metric) => (
                    <Card key={metric.label}>
                        <div className="text-sm text-gray-500 mb-1">
                            {metric.label}
                        </div>
                        <div className="font-semibold">{metric.value}</div>
                    </Card>
                ))}
            </div>

            <Card>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h4 className="mb-1">Admin API status</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                            {project.status}
                        </p>
                    </div>
                    <div className="rounded-md border border-gray-200 px-4 py-3 text-sm font-mono dark:border-gray-700">
                        /api/admin/{project.apiNamespace}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ProjectOverview
