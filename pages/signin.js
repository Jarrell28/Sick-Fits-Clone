import styled from "styled-components";
import RequestReset from "../components/RequestReset";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const GridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
`

//Sign in Page
export default function SignInPage() {
    return (
        <GridStyles>
            <SignIn></SignIn>
            <SignUp></SignUp>
            <RequestReset></RequestReset>
        </GridStyles>
    )
}