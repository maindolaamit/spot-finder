import './App.css';
import SearchAppBar from "./components/app-menu/app-menu";
import MultiActionAreaCard from "./components/address-card/address-card";

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <MultiActionAreaCard/>
    </div>
  );
}

export default App;
