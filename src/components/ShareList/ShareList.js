import React from "react";
import { useParams } from "react-router-dom";
import "./ShareList.css";
import logo from "../../asset/wlR_Black_Logo.png";
import item from "../../asset/ipohnemax.jpg";
import { useQuery } from "@tanstack/react-query";
import getwishlistdetails from "../../api/wishList";
const ShareList = () => {
  const { wishlistId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["wishlistdetails", wishlistId],
    queryFn: () => getwishlistdetails(wishlistId),
  });

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
          <img src={logo} />
          <h3>{data?.name}</h3>
        </div>
        <div className="item-container">
          {data?.items.map((item) => (
            <div key={item?.item?.item_id} className="items-display">
              <div className="item-image">
                <img src={item?.item?.image} />
              </div>
              <div className="item-name">
                <h5>{item?.item?.name}</h5>
              </div>
              <div className="item-price">
                <h5>{item?.item?.price} KD</h5>
              </div>
              <div className="item-select">
                <input type="checkbox" />
              </div>
              <div className="item-payment">
                <button>Press to pay</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareList;
