export interface Product {
    products: Products[];
}

export type Products = {
    id: number;
    productName: string;
    quantity: number;
    description: string;
    about: string;
    category: string;
    price: string;
    offerPrice: string;
    status: string;
    images: string;
    date: string;
    isWhitelisted: any;
}