import React, { useContext } from "react";
import Heading from "./Heading";
import Calculator from "./Calculator";
import "../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TotalContext from "../context/TotalContxt";
const sortArr = (arr) => arr.sort((a, b) => a - b);
const Split = () => {
  const { total } = useContext(TotalContext);
  const tipRates = [10, 15, 5, 50, 25];
  const heading = "gift amount";

  return (
    <div className="container d-flex flex-column justify-content-between justify-content-sm-center h-100 px-0 py-sm-5">
      <Heading title={heading} total={total} />
      <Calculator tipRates={sortArr(tipRates)} total={total} />
    </div>
  );
};

export default Split;
