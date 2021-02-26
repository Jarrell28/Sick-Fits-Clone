import RequestReset from "../components/RequestReset"
import Reset from "../components/Reset"

//Reset Page to perform password reset
export default function ResetPage({ query }) {
    //If no token is available, redirects to Request Reset form
    if (!query?.token) {
        return (
            <div>
                <p>Sorry, must supply valid token</p>
                <RequestReset />
            </div>
        )
    }
    //Else allows to reset password
    //Pass token to Reset component
    return (
        <div>
            <p>Reset Your Password</p>
            <Reset token={query.token} />
        </div>
    )
}