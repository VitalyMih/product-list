import './App.css';
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";

function App(props) {
  return (
    <div className="App">
      <FilterableProductTable products={props.products} />
    </div>
  );
}

export default App;
