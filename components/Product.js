import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';

//Component displaying Single Product on the Products Page. 
//Receives a single product object as argument from the gql all products query
export default function Product({ product }) {
    return (
        <ItemStyles>
            <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
            <Title>
                <Link href={`/product/${product.id}`}>{product.name}</Link>
            </Title>
            <PriceTag>{formatMoney(product.price)}</PriceTag>
            <p>{product.description}</p>
            {/* Add buttons to add and delete */}
            <div className="buttonList">
                <Link href={{
                    pathname: 'update',
                    query: {
                        id: product.id
                    }
                }}>Edit</Link>
                <AddToCart id={product.id} />
                <DeleteProduct id={product.id}>Delete</DeleteProduct>
            </div>
        </ItemStyles>
    )
}