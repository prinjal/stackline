import "./App.css";
import salesData from "../data/stackline_frontend_assessment_data_2021.json";
import List from "./components/List";
import Product from "./components/Product";
import Chart from "./components/Chart";
import logo from "../public/stackline_logo.svg";

function App() {
  console.log(salesData);
  return (
    <>
      <div className="container">
        <nav className=" bg-blue-950 border-b-2 border-gray-200 px-4 py-2 flex w-screen">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-20 w-20 mr-2" />
          </div>
        </nav>
        <div className="flex flex-row gap-4">
          <div className="lg:w-1/4">
            {salesData.map((sale) => {
              return (
                <Product
                  id={sale.id}
                  title={sale.title}
                  image={sale.image}
                  subtitle={sale.subtitle}
                  tags={sale.tags}
                />
              );
            })}
          </div>
          <div className="flex-1 py-5 px-4">
            {salesData.map((sale) => {
              return <Chart data={sale.sales} />;
            })}

            {salesData.map((sale) => {
              return <List id={sale.id} sales={sale.sales} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
