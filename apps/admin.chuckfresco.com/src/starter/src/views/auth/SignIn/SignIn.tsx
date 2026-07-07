import SignInForm from './SignInForm'

const SignIn = () => {
    return (
        <>
            <div className="mb-8">
                <h3 className="mb-1">Chuck Fresco Admin</h3>
                <p>Authenticate with AWS, then exchange your admin key for an API token.</p>
            </div>
            <SignInForm disableSubmit={false} />
        </>
    )
}

export default SignIn
