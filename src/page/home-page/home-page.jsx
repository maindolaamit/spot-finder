import SearchAppBar from "../../components/app-menu/app-menu";
import {Grid} from "@mui/material";
import LocationData from "../../data/location-data";
import LocationAreaCard from "../../components/address-card/address-card";
import "./home-page.css"

export const HomePage = () => {
  return (
    <div>
      <SearchAppBar/>
      <Grid container spacing={1} className={"home-page-body"}>
        {
          Object.entries(LocationData).map(([id, location]) =>
            <Grid item xs={4}>
              <LocationAreaCard image_url={location.image_url} address={location.address}
                                description={location.description} name={location.name}/>
            </Grid>
          )
        }
      </Grid>
    </div>)
}