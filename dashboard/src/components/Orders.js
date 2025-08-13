import React from "react";
import axios from "axios";

// import { positions } from "../data/data";
import { useState } from "react";
import { useEffect } from "react";

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() =>{
    axios.get("http://localhost:3002/allOrders").then((res) =>{
      setAllOrders(res.data);
    })
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          </thead>

          {allOrders.map((stock, index) => {
            const isMode = stock.mode === "BUY" ? "profit" : "loss";

            return (
              <tbody>
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td className={isMode} style={{fontSize: "13px"}}>{stock.mode}</td>
              </tr> 
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
