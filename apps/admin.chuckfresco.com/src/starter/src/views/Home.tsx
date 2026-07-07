import Card from '@/components/ui/Card'
import { useAppSelector } from '@/store'

const Home = () => {
    const token = useAppSelector((state) => state.auth.session.token)
    const user = useAppSelector((state) => state.auth.user)
    const tokenFingerprint = token ? token.slice(-8).toUpperCase() : ''

    return (
        <div className="space-y-6">
            <div>
                <h2 className="mb-2">Admin Dashboard</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    AWS authentication and admin key exchange are active for admin API access.
                </p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                <Card>
                    <div className="text-sm text-gray-500 mb-1">Signed in as</div>
                    <div className="font-semibold">{user.userName || 'Admin'}</div>
                    <div className="text-sm">{user.email || 'No email configured'}</div>
                </Card>
                <Card>
                    <div className="text-sm text-gray-500 mb-1">Authority</div>
                    <div className="font-semibold">{user.authority?.join(', ') || 'none'}</div>
                </Card>
                <Card>
                    <div className="text-sm text-gray-500 mb-1">Admin API token</div>
                    <div className="font-semibold">{token ? 'Issued' : 'Not issued'}</div>
                    {tokenFingerprint && (
                        <div className="text-sm text-gray-500 mt-1">
                            Fingerprint {tokenFingerprint}
                        </div>
                    )}
                </Card>
            </div>
        </div>
    )
}

export default Home
