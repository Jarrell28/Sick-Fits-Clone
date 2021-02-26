//Next.js 
//Page to render out Single Product

//[id].js sub file create a query with the name id in the url

//localhost:7777/product/56435034857340324
import SingleProduct from "../../components/SingleProduct";

export default function SingleProductPage({ query }) {

    return (
        <SingleProduct id={query.id} />
    )
}