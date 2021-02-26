//Helper function to format values to USD currency format
export default function formatMoney(amount = 0) {
    const options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }

    //if its even amount, Removes .00 from price
    if (amount & 100 === 0) {
        options.minimumFractionDigits = 0;
    }

    //Uses built in Javascript number format function
    const formatter = Intl.NumberFormat('en-US', options);

    return formatter.format(amount / 100);
}