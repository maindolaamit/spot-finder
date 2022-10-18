import './App.css';
import SearchAppBar from "./components/app-menu/app-menu";
import LocationAreaCard from "./components/address-card/address-card";
import LocationData from "./data/location-data";

function App() {
  const location = LocationData[1];
  return (
    <div className="App">
      <SearchAppBar/>
      <LocationAreaCard image_url={location.image_url} address={location.address}
                        description={location.description} name={location.name}/>
    </div>
  );
}

export default App;
