import { useRouter } from "next/dist/client/router";
import Pagination from "../../components/Pagination";
import Products from "../../components/Products";

//Component displaying all Products
export default function ProductsPage() {
    //Getting router from next.js
    //Used to get the page query from URL
    const { query } = useRouter();
    //page being returned as string, must parse into Int
    const page = parseInt(query.page);

    return <div>
        <Pagination page={page || 1} />
        <Products page={page || 1} />
        <Pagination page={page || 1} />
    </div>
}