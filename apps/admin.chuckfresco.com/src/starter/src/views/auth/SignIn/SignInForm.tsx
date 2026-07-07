import Button from '@/components/ui/Button'
import Alert from '@/components/ui/Alert'
import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'
import useAuth from '@/utils/hooks/useAuth'
import { apiGetAwsLogin } from '@/services/AuthService'
import { useEffect, useMemo, useRef, useState } from 'react'
import { FaAws } from 'react-icons/fa'
import type { CommonProps } from '@/@types/common'

interface SignInFormProps extends CommonProps {
    disableSubmit?: boolean
}

const SignInForm = (props: SignInFormProps) => {
    const {
        disableSubmit = false,
        className,
    } = props

    const [message, setMessage] = useTimeOutMessage()
    const [awsLoginUrl, setAwsLoginUrl] = useState<string | null>(null)
    const [awsRequired, setAwsRequired] = useState(false)
    const [awsConfigured, setAwsConfigured] = useState(false)
    const [finalizingAwsLogin, setFinalizingAwsLogin] = useState(false)
    const [awsFinalizeFailed, setAwsFinalizeFailed] = useState(false)
    const finalizedAwsLogin = useRef(false)

    const { signIn } = useAuth()
    const awsCode = useMemo(() => {
        return new URLSearchParams(window.location.search).get('code')
    }, [])

    useEffect(() => {
        const loadAwsLogin = async () => {
            try {
                const response = await apiGetAwsLogin()
                setAwsLoginUrl(response.data.loginUrl)
                setAwsRequired(response.data.required)
                setAwsConfigured(response.data.configured)
            } catch (error) {
                setAwsConfigured(false)
            }
        }

        loadAwsLogin()
    }, [])

    useEffect(() => {
        const finalizeAwsLogin = async () => {
            if (!awsCode || finalizedAwsLogin.current) {
                return
            }

            finalizedAwsLogin.current = true
            setFinalizingAwsLogin(true)

            const result = await signIn({
                userName: 'admin',
                awsCode,
            })

            if (result?.status === 'failed') {
                setMessage(result.message)
                setFinalizingAwsLogin(false)
                setAwsFinalizeFailed(true)
            }
        }

        finalizeAwsLogin()
    }, [awsCode, setMessage, signIn])

    return (
        <div className={className}>
            {message && (
                <Alert showIcon className="mb-4" type="danger">
                    <>{message}</>
                </Alert>
            )}
            <div className="mb-6 text-left">
                <div className="mb-2 text-lg font-semibold">AWS Cognito</div>
                <p className="mb-6 text-base">
                    {awsCode
                        ? 'AWS returned a login code. Verifying your admin access.'
                        : awsConfigured
                          ? 'Continue to the secure AWS hosted login page.'
                          : awsRequired
                            ? 'AWS login is required, but Cognito is not configured yet.'
                            : 'AWS Cognito is not configured for this environment yet.'}
                </p>
                <Button
                    block
                    icon={<FaAws />}
                    variant="solid"
                    type="button"
                    loading={finalizingAwsLogin}
                    disabled={
                        disableSubmit ||
                        !awsLoginUrl ||
                        (Boolean(awsCode) && !awsFinalizeFailed)
                    }
                    onClick={() => {
                        if (awsLoginUrl) {
                            window.location.href = awsLoginUrl
                        }
                    }}
                >
                    {awsCode
                        ? awsFinalizeFailed
                            ? 'Start AWS Cognito Again'
                            : 'Finalizing AWS Cognito...'
                        : 'Sign In'}
                </Button>
            </div>
        </div>
    )
}

export default SignInForm
