
export interface Product {
    name: string;
    price: number;
}


const phone: Product = {
    name: 'Samsung Galaxy S10',
    price: 1000
}


const tablet: Product = {
    name: 'iPad Pro',
    price: 1200
}


function taxCalculator(products: Product[], tax: number): number {
    const total = products.reduce((acc, product) => acc + product.price, 0);
    return total * tax;
}


const shoppingCart = [phone, tablet];

const tax = 0.16;


const totalTax = taxCalculator(shoppingCart, tax);

console.log(totalTax);


 export {}