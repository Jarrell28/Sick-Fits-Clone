import { useUser } from './User';
import SignIn from './SignIn';

//Component to return sign in page if user is not logged in
export default function ({ children }) {
    const me = useUser();

    if (!me) return <SignIn />;
    return children;
}