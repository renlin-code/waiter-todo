import Catalog from "./components/catalog/Catalog";
import Header from "./components/header/Header";
import TableList from "./components/list/TableList";
import { TablesProvider } from "./context/TablesProvider"
import "./App.css"

function App() {
  return (
    <>
      <TablesProvider>
        <div className="app-wrapper">
          <Header />
          <TableList />
          <Catalog />
        </div>
      </TablesProvider>
    </>
  )
}

export default App;
