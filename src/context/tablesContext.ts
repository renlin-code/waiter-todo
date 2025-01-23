import { createContext } from "react";
import { CatalogCategory, Table } from "../types";

type TablesContextType = {
    data: CatalogCategory[];
    tables: Table[];
    addNewTable: (number: number) => void;
    deleteTable: (id: string) => void;
    addProductToTable: (tableId: string, categoryName: string, productName: string, amount: number) => void;
    updateProductActiveProp: (id: string, value: boolean) => void;
    updateProductAmountProp: (id: string, value: number) => void;
    deleteProduct: (id: string) => void;
    resetStorage: () => void;
    activeTable: number;
    setActiveTable: (index: number) => void;
}
const tablesContext = createContext<TablesContextType>({
    data: [],
    tables: [],
    addNewTable: (number: number) => number,
    deleteTable: (id: string) => id,
    addProductToTable: (tableId: string, categoryName: string, productName: string, amount: number) => ({tableId, categoryName, productName, amount}),
    updateProductActiveProp: (id: string, value: boolean) => ({id, value}),
    updateProductAmountProp: (id: string, value: number) => ({id, value}),
    deleteProduct: (id: string) => id,
    resetStorage: () => {},
    activeTable: 0,
    setActiveTable: (index: number) => index
})


export default tablesContext;