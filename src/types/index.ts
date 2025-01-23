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

export type CatalogProduct = {
    name: string;
}

export type CatalogCategory = {
    name: string;
    color: string;
    products: CatalogProduct[];
}