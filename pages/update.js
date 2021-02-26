import UpdateProduct from "../components/UpdateProduct";

//Update page that passes the id of the product to UpdateProduct Component
export default function UpdatePage({ query }) {
    return <div>
        <UpdateProduct id={query.id} />
    </div>
}