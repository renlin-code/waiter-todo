import Catalog from "./components/Catalog";
import Header from "./components/Header";
import TableList from "./components/TableList";
import { TablesProvider } from "./context/TablesProvider"
function App() {
  return (
    <>
      <TablesProvider>
        <Header />
        <TableList />
        <Catalog />
      </TablesProvider>
    </>
  )
}

export default App;
