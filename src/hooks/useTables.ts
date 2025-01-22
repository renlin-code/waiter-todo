import { useEffect, useState } from "react";
import { Table } from "../types";
import { generateRandomId } from "../utils";

const TABLES_ST_KEY = "TABLES_ST_KEY"

const getTablesFromStorage = (): Table[] => {
    const stTables = localStorage.getItem(TABLES_ST_KEY)
    if (!stTables) return []

    return JSON.parse(stTables)
};

const sendTablesToStorage = (tables: Table[]) => {
    localStorage.setItem(TABLES_ST_KEY, JSON.stringify(tables))
}

export function useTables() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);

    const storageTables = getTablesFromStorage();
    const [tables, setTables] = useState<Table[]>(storageTables);

    const updateTables = (newTables: Table[]) => {
        sendTablesToStorage(newTables);
        setTables(newTables);
    }

    const addNewTable = (number: number) => {
        const newTable = {
            id: generateRandomId(),
            number,
            products: []
        }
        updateTables([
            ...tables,
            newTable
        ])
    }

    const deleteTable = (id: string) => {
        const index = tables.findIndex((table) => table.id === id)
        if (index === -1) {
            return
        }
        const tablesCopy = structuredClone(tables)
        tablesCopy.splice(index, 1)

        updateTables(tablesCopy)
    }

    const addProductToTable = (tableId: string, categoryName: string, productName: string, amount: number) => {
        const table = tables.find((table) => table.id === tableId)
        if (!table) {
            return
        }
        const index = tables.indexOf(table)

        const newTable = {
            ...table,
            products: [
                ...table.products,
                {
                    id: generateRandomId(),
                    name: productName,
                    categoryName,
                    amount,
                    active: true
                }
            ]
        }

        const tablesCopy = structuredClone(tables);
        tablesCopy.splice(index, 1, newTable)

        updateTables(tablesCopy)
    }

    const updateProductActiveProp = (id: string, value: boolean) => {
        const tablesCopy = structuredClone(tables);

        tablesCopy.forEach(table => {
            table.products.forEach(product => {
                if (product.id === id) {
                    product.active = value;
                }
            });
        });

        updateTables(tablesCopy);
    }

    const resetStorage = () => {
        updateTables([])
    }


    useEffect(() => {
        fetch("/data.json").then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(jsonData => {
                setData(jsonData);
                setLoading(false);
            })
            .catch(error => {
                console.log(error)
                setLoading(false);
            });
    }, [])


    return {
        data,
        loading,
        tables,
        addNewTable,
        deleteTable,
        addProductToTable,
        updateProductActiveProp,
        resetStorage,
    }
} 