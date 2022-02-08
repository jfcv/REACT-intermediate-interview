const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.key}>{column.name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
