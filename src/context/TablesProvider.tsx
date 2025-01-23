import { FC, ReactNode, useState } from "react";
import { useTables } from "../hooks/useTables";
import tablesContext from "./tablesContext";
const TablesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [activeTable, setActiveTable] = useState(0)
    const tables = useTables();

    return (
        <tablesContext.Provider value={{
            ...tables,
            activeTable,
            setActiveTable
        }}>
            {children}
        </tablesContext.Provider>
    )
}

export {
    TablesProvider
}