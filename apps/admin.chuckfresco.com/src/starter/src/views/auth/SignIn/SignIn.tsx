import SignInForm from './SignInForm'

const SignIn = () => {
    return (
        <>
            <div className="mb-8">
                <h3 className="mb-2 text-4xl font-bold">Welcome back!</h3>
                <p className="text-xl">
                    Continue with AWS Cognito to sign in.
                </p>
            </div>
            <SignInForm disableSubmit={false} />
        </>
    )
}

export default SignIn
