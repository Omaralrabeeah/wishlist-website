import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ShareList.css";
import logo from "../../asset/wlR_Black_Logo.png";
import item from "../../asset/ipohnemax.jpg";
import { useQuery } from "@tanstack/react-query";
import getwishlistdetails from "../../api/wishList";
import TotalContext from "../../context/TotalContxt";
const ShareList = () => {
  const { wishlistId } = useParams();

  const navigation = useNavigate();
  const { total, setTotal } = useContext(TotalContext);
  const handleTotal = () => {
    setTotal = total + 1;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["wishlistdetails", wishlistId],
    queryFn: () => getwishlistdetails(wishlistId),
  });

  useEffect(() => {
    setTotal([]);
  }, []);
  if (isLoading) {
    return (
      <div style={{ padding: 100 }}>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="title-container">
          <img
            src={logo}
            style={{
              width: 100,
              height: 100,
              objectFit: "contain",
            }}
          />
          <h3>{data?.name}</h3>
        </div>
        <div className="item-container" style={{ gap: "50px" }}>
          {data?.items.map((item) => (
            <div
              key={item?.item?.item_id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                gap: "20px",
              }}
            >
              <div className="item-select">
                <input
                  type="checkbox"
                  onClick={() => {
                    setTotal((e) => [...e, item]);
                  }}
                />
              </div>

              <div className="item-image" style={{ width: "150px" }}>
                <img src={item?.item?.image} style={{ objectFit: "contain" }} />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <h5>{item?.item?.name}</h5>
                </div>
                <div className="item-payment" style={{ width: "100%" }}>
                  <button
                    onClick={() => {
                      navigation("/payLink");
                    }}
                  >
                    {item?.item?.price} KD Pay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareList;
