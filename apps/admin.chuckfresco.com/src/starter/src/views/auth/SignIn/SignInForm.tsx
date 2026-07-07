import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Alert from '@/components/ui/Alert'
import PasswordInput from '@/components/shared/PasswordInput'
import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'
import useAuth from '@/utils/hooks/useAuth'
import { apiGetAwsLogin } from '@/services/AuthService'
import { Field, Form, Formik } from 'formik'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as Yup from 'yup'
import type { CommonProps } from '@/@types/common'

interface SignInFormProps extends CommonProps {
    disableSubmit?: boolean
}

type SignInFormSchema = {
    userName: string
    adminKey?: string
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

    const validationSchema = useMemo(() => {
        return Yup.object().shape({
            userName: Yup.string().required('Please enter your admin name'),
            adminKey: awsCode
                ? Yup.string()
                : Yup.string().required('Please enter your admin key'),
        })
    }, [awsCode])

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

    const onSignIn = async (
        values: SignInFormSchema,
        setSubmitting: (isSubmitting: boolean) => void,
    ) => {
        const { userName, adminKey } = values
        setSubmitting(true)

        const result = await signIn({ userName, adminKey, awsCode })

        if (result?.status === 'failed') {
            setMessage(result.message)
        }

        setSubmitting(false)
    }

    return (
        <div className={className}>
            {message && (
                <Alert showIcon className="mb-4" type="danger">
                    <>{message}</>
                </Alert>
            )}
            <Formik
                initialValues={{
                    userName: 'admin',
                    adminKey: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    if (!disableSubmit) {
                        onSignIn(values, setSubmitting)
                    } else {
                        setSubmitting(false)
                    }
                }}
            >
                {({ touched, errors, isSubmitting }) => (
                    <Form>
                        <FormContainer>
                            <div className="mb-6 rounded border border-gray-200 dark:border-gray-700 p-4">
                                <div className="font-semibold mb-1">AWS login</div>
                                <p className="text-sm mb-4">
                                    {awsCode
                                        ? 'AWS login received. Verifying your admin group access.'
                                        : awsConfigured
                                          ? 'Use AWS Cognito to sign in with an allowed admin email.'
                                          : awsRequired
                                            ? 'AWS login is required, but Cognito is not configured yet.'
                                            : 'AWS login is not configured for local demo mode yet.'}
                                </p>
                                <Button
                                    block
                                    type="button"
                                    disabled={
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
                                            ? 'Retry AWS Login'
                                            : 'Verifying AWS Login'
                                        : 'Continue with AWS'}
                                </Button>
                            </div>
                            {awsCode ? (
                                <Button
                                    block
                                    loading={finalizingAwsLogin}
                                    variant="solid"
                                    type="button"
                                    disabled={!awsFinalizeFailed}
                                    onClick={() => {
                                        if (awsLoginUrl) {
                                            window.location.href = awsLoginUrl
                                        }
                                    }}
                                >
                                    {awsFinalizeFailed
                                        ? 'Start AWS Login Again'
                                        : 'Finalizing AWS login...'}
                                </Button>
                            ) : (
                                <>
                                    <FormItem
                                        label="Admin Name"
                                        invalid={
                                            (errors.userName &&
                                                touched.userName) as boolean
                                        }
                                        errorMessage={errors.userName}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="userName"
                                            placeholder="Admin Name"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Admin Key"
                                        invalid={
                                            (errors.adminKey &&
                                                touched.adminKey) as boolean
                                        }
                                        errorMessage={errors.adminKey}
                                    >
                                        <Field
                                            autoComplete="off"
                                            name="adminKey"
                                            placeholder="Admin Key"
                                            component={PasswordInput}
                                        />
                                    </FormItem>
                                    <Button
                                        block
                                        loading={isSubmitting}
                                        variant="solid"
                                        type="submit"
                                    >
                                        {isSubmitting ? 'Creating token...' : 'Get Admin Token'}
                                    </Button>
                                </>
                            )}
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignInForm
