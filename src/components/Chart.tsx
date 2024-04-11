import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import { Sales } from "./Record";

interface ChartProp {
  data: Sales[];
}

const RetailSalesChart = ({ data }: ChartProp) => {
  const chartData = useMemo(() => {
    const salesByMonth: Record<string, number> = {};

    data.forEach((sale) => {
      const month = getMonthFromDate(sale.weekEnding);
      if (!salesByMonth[month]) {
        salesByMonth[month] = 0;
      }
      salesByMonth[month] += sale.retailSales;
    });

    return Object.entries(salesByMonth).map(([name, Sales]) => ({
      name,
      Sales,
    }));
  }, [data]);

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-5">Retail Sales</h2>
      <LineChart
        width={800}
        height={250}
        data={chartData}
        margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name">
          <Label value="Month" offset={-10} position="insideBottom" dx={40} />
        </XAxis>
        <YAxis
          label={{
            value: "Sales ($)",
            angle: -90,
            position: "insideLeft",
            dx: -40,
          }}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

const getMonthFromDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
};

export default RetailSalesChart;
