import { gql, useQuery } from "@apollo/client"

export const CURRENT_USER_QUERY = gql`
    query{
        authenticatedItem {
            ... on User {
                id
                email
                name
                cart {
                    id
                    quantity
                    product {
                        id
                        price
                        name
                        description
                        photo {
                            image {
                                publicUrlTransformed
                            }
                        }
                    }
                }
            }
        }
    }
`
//Component to return the current logged in user
export function useUser() {
    const { data } = useQuery(CURRENT_USER_QUERY);

    return data?.authenticatedItem;

}