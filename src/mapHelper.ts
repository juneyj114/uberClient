import axios from "axios";

export const reverseGeoCode = async (latlng: string) => {
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=AIzaSyDyrhysIUpb0N506bRHvo2fFSLG4uJC_DU`
  );
  if (data.status === "OK") {
    return data.results[0].formatted_address;
  } else {
    return "Don't find a location";
  }
};
