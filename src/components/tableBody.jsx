const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((obj) => (
        <tr>
          {columns.map((column) => (
            <td>{obj[column.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
