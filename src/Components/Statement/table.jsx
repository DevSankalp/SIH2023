import React from "react";
import tableData from "./table.json";

function RenderTable({ tableKey }) {
  const renderCellValue = (value) => {
    if (typeof value === "object") {
      return Object.entries(value).map(([subKey, subValue]) => (
        <div key={subKey}>
          <span>{subKey}:</span> {subValue}
        </div>
      ));
    } else {
      return value;
    }
  };

  const table = tableData[tableKey];

  if (!table || !table.headers || !table.rows) {
    return null;
  }

  return (
    <table
      key={tableKey}
      className="w-4/5 rounded-xl overflow-hidden shadow-[0_0_7px_rgba(0,0,0,0.3)]"
    >
      <thead className="bg-[#B77AFD]">
        <tr>
          {table.headers.map((header, index) => (
            <th key={index} className="border p-4 font-thin">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white">
        {table.rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="py-5">
            {row.values.map((value, colIndex) => (
              <td
                key={colIndex}
                className={`border p-4 ${
                  table.headers[colIndex] === "S.No." ? "text-center" : ""
                }`}
              >
                {typeof value === "object" ? renderCellValue(value) : value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Table() {
  return (
    <div className="flex flex-col items-center justify-center my-8 gap-8">
      {Object.keys(tableData).map((tableKey) => (
        <RenderTable key={tableKey} tableKey={tableKey} />
      ))}
    </div>
  );
}

export default Table;
