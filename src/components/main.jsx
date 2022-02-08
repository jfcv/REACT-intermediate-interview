import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import Table from "./table";

const apiEndpoint = "https://randomuser.me/api?results=20";

const Main = () => {
  const [location, setLocation] = useState([]);

  const parseData = (data) => {
    const parsedData = data.map((obj) => {
      const { city, coordinates, country, postcode, state, street, timezone } =
        obj.location;
      const newObj = {};
      newObj["city"] = city;
      newObj["latitude"] = coordinates.latitude;
      newObj["longitude"] = coordinates.longitude;
      newObj["country"] = country;
      newObj["postcode"] = postcode;
      newObj["state"] = state;
      newObj["streetName"] = street.name;
      newObj["streetNumber"] = street.number;
      newObj["timezoneDescription"] = timezone.description;
      newObj["timezoneOffset"] = timezone.offset;
      return newObj;
    });
    return parsedData;
  };

  const fetchData = async () => {
    const { data } = await axios(apiEndpoint);
    setLocation(parseData(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Location</h1>
      <Table data={location} />
    </div>
  );
};

export default Main;
