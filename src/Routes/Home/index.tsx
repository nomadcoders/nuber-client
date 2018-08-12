import { GoogleApiWrapper } from "google-maps-react";
import { MAPS_KEY } from "../../keys";
import HomeContainer from "./HomeContainer";
export default GoogleApiWrapper({
  apiKey: MAPS_KEY
})(HomeContainer);
