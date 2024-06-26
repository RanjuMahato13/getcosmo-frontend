import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const OfferProduct = (props) => {
  const { title, brand, totalrating, price, sold, quantity, image, id } = props;
  console.log(quantity / quantity + sold * 100);
  return (
    <div className="col-6 mb-3">
      <div className="offer-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src={image} className="img-fluid" alt="Sunscreem" />
          </div>
          <div className="offer-product-content">
            <h5 className="brand">{brand}</h5>
            <h6 className="title">{title}</h6>
            <ReactStars
              count={5}
              size={24}
              value={totalrating}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">RS. {price}</span> &nbsp;
              {/* <strike>Rs.1000</strike> */}
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 Days</b>
              </p>
            </div>
            <div className="prod-count my-3">
              <p>Products: {quantity}</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: quantity / quantity + sold * 100 + "%" }}
                  aria-valuenow={quantity / quantity + sold * 100}
                  aria-valuemin={quantity}
                  aria-valuemax={sold + quantity}
                ></div>
              </div>
            </div>
            <Link className="button" to={'/product/'+id}>View</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferProduct;
