import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ data }) => {
  const headers = [
    { key: "country", name: "Country" },
    { key: "state", name: "State" },
    { key: "city", name: "City" },
    { key: "postcode", name: "Postcode" },
    { key: "streetName", name: "Street" },
    { key: "streetNumber", name: "Number" },
    { key: "latitude", name: "Latitude" },
    { key: "longitude", name: "Longitude" },
    { key: "timezoneOffset", name: "Time Zone" },
    { key: "timezoneDescription", name: "Description" },
  ];

  return (
    <table style={{ padding: 100 }} className="table">
      <TableHeader columns={headers} />
      <TableBody data={data} columns={headers} />
    </table>
  );
};

export default Table;
