import { useEffect, useState } from "react";
import Record, { Sales } from "./Record";

type SortField =
  | "weekEnding"
  | "retailSales"
  | "wholesaleSales"
  | "unitsSold"
  | "retailerMargin";
type SortOrder = "asc" | "desc";

interface ListProp {
  id: string;
  sales: Sales[];
}

const List = ({ id, sales }: ListProp) => {
  const [sale, setSale] = useState<Sales[]>(() =>
    sales.sort((a, b) => a.weekEnding.localeCompare(b.weekEnding))
  );
  const [sortField, setSortField] = useState<SortField>("weekEnding");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  useEffect(() => {
    setSale(sales);
  }, [sales]);

  const handleSort = (field: SortField) => {
    const isAsc = sortField === field && sortOrder === "asc";
    setSortOrder(isAsc ? "desc" : "asc");
    setSortField(field);

    const sortedSales = [...sale].sort((a, b) => {
      if (a[field] < b[field]) {
        return isAsc ? 1 : -1;
      }
      if (a[field] > b[field]) {
        return isAsc ? -1 : 1;
      }
      return 0;
    });

    setSale(sortedSales);
  };

  const renderSortArrow = (field: SortField) => {
    return sortField === field ? (sortOrder === "asc" ? "▲" : "▼") : "▼";
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-5 gap-4 p-4 bg-white font-bold text-sm text-gray-800 m-4">
        <div
          onClick={() => handleSort("weekEnding")}
          className="cursor-pointer"
        >
          WEEK ENDING {renderSortArrow("weekEnding")}
        </div>
        <div
          onClick={() => handleSort("retailSales")}
          className="cursor-pointer"
        >
          RETAIL SALES {renderSortArrow("retailSales")}
        </div>
        <div
          onClick={() => handleSort("wholesaleSales")}
          className="cursor-pointer"
        >
          WHOLESALE SALES {renderSortArrow("wholesaleSales")}
        </div>
        <div onClick={() => handleSort("unitsSold")} className="cursor-pointer">
          UNITS SOLD {renderSortArrow("unitsSold")}
        </div>
        <div
          onClick={() => handleSort("retailerMargin")}
          className="cursor-pointer"
        >
          RETAILER MARGIN {renderSortArrow("retailerMargin")}
        </div>
      </div>
      <div className="bg-white m-5 gap-y-5">
        {sale.map((sale) => {
          return <Record id={id} sale={sale} />;
        })}
      </div>
    </div>
  );
};

export default List;
