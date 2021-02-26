import CreateProduct from "../components/CreateProduct";
import PleaseSignIn from "../components/PleaseSignIn";

//Page to sell items
export default function SellPage() {
    return <div>
        {/* Wraps Component in PleaseSignIn to verify if users are logged in. If not redirects to Sign in page */}
        <PleaseSignIn>
            <CreateProduct />
        </PleaseSignIn>
    </div>
}