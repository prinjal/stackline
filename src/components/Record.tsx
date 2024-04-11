export interface RecordProp {
  id: string;
  sale: Sales;
}

export interface Sales {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

const Record = ({ id, sale }: RecordProp) => {
  return (
    <div
      key={id}
      className="grid grid-cols-5 gap-4 bg-white p-4 shadow rounded-lg my-1 m-4"
    >
      <div className="font-bold text-sm text-gray-800">{sale.weekEnding}</div>
      <div className="font-bold text-sm text-gray-800">
        ${sale.retailSales.toLocaleString()}
      </div>
      <div className="font-bold text-sm text-gray-800">
        ${sale.wholesaleSales.toLocaleString()}
      </div>
      <div className="font-bold text-sm text-gray-800">
        {sale.unitsSold.toLocaleString()}
      </div>
      <div className="font-bold text-sm text-gray-800">
        ${sale.retailerMargin.toLocaleString()}
      </div>
    </div>
  );
};

export default Record;
