export type Product = {
    id: string;
    name: string;
    categoryName: string | null;
    amount: number;
    active: boolean;
}

export type Table = {
    id: string;
    number: number;
    products: Product[];
}