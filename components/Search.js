import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift'
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown'

//Query to search items by name or description
const SEARCH_PRODUCTS_QUERY = gql`
    query SEARCH_PRODUCTS_QUERY($searchTerm: String!){
        searchTerms: allProducts(where: {
            OR: [
                { name_contains_i: $searchTerm},
                { description_contains_i: $searchTerm}
            ]
        }){
            id
            name
            photo {
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`

//Component to implement search functionality
export default function Search() {
    //Importing router to change page when performing a search
    const router = useRouter();

    //Data returned from performing search query
    const [findItems, { loading, data, error }] = useLazyQuery(SEARCH_PRODUCTS_QUERY, {
        fetchPolicy: 'no-cache' // bypasses the apollo client cache and always searches in the database
    })

    //Array containing all data returned by search query
    const items = data?.searchTerms || [];

    //Debounce function to limit the amount of requests to database on input change
    const findItemsButChill = debounce(findItems, 350);

    resetIdCounter();

    //Using DownShift.js to assist with displaying a search dropdown box that displays search results
    const { isOpen, inputValue, getMenuProps, getInputProps, getComboboxProps, getItemProps, highlightedIndex } = useCombobox({

        items: items, // items returned from search result
        onInputValueChange() { //on search bar input change, performs query search
            findItemsButChill({
                variables: {
                    searchTerm: inputValue,
                }
            });
        },
        onSelectedItemChange({ selectedItem }) { // on item select, updates page
            router.push({
                pathname: `/product/${selectedItem.id}`
            })
        },
        itemToString: item => item === null ? '' : item?.name //Defaults the item to a string to display name in search bar

    });

    return (
        <SearchStyles>
            {/* DownShift.js variables passed to elements */}
            <div {...getComboboxProps()}>
                <input {...getInputProps({
                    type: 'search',
                    placeholder: 'Search for an Item',
                    id: 'search',
                    className: loading ? 'loading' : ''
                })} />
            </div>
            {/* DropDown, DropDownItem are custom styled components */}
            <DropDown {...getMenuProps()}>

                {/* isOpen used to verify if the searchbar is active */}
                {/* Loops over the items returned from query search and displays dropdown list */}
                {isOpen && items.map((item, index) => (
                    <DropDownItem key={item.id} {...getItemProps({ item })} highlighted={index === highlightedIndex} onClick={() => router.push({ pathname: `/product/${item.id}` })}>
                        <img src={item.photo.image.publicUrlTransformed} alt={item.name} width="50" />
                        {item.name}
                    </DropDownItem>
                ))}

                {/* If no items are found from query search */}
                {isOpen && !items.length && !loading && (
                    <DropDownItem>Sorry, No Items found for {inputValue}</DropDownItem>
                )}
            </DropDown>
        </SearchStyles>
    )
}