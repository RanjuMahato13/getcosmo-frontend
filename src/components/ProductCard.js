import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import  addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCard = (props) => {
  const { grid, data } = props;
  //const ProductCard = ({ grid, data }) => {
  //console.log("the prop data is: ", data);
  let location = useLocation();
  const dispatch = useDispatch();
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  return (
    <>
      {Array.isArray(data) &&
        data?.map((items, index) => {
          return (
            <div
              key={index}
              className={` ${
                location.pathname == "/product" ? `gr-${grid}` : "col-3"
              } `}
            >
              <div
              
                className="product-card position-relative"
              >
                <div className="wishlist-icon position-absolute">
                  <button
                    className="border-0 bg-transparent"
                    onClick={(e) => {
                      addToWish(items?._id);
                    }}
                  >
                    <img src="images/wish.svg" alt="wishlist" />
                  </button>
                </div>
                <div className="product-image">
                  <img
                    src={items?.images?.[0]?.url}
                    className="img-fluid"
                    alt="product image"
                  />
                  <img
                    src={
                      items?.images?.[1]?.url
                        ? items?.images?.[1]?.url
                        : items?.images?.[0]?.url
                    }
                    className="img-fluid"
                    alt="product image"
                  />
                </div>
                <div className="product-details">
                  <h6 className="brand">{items?.brand}</h6>
                  <h5 className="product-title">{items?.title}</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={items?.totalrating.toString()}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p
                    className={`description ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                    dangerouslySetInnerHTML={{ __html: items?.description }}
                  ></p>
                  <p className="price">Rs.{items?.price}</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    {/* <button className="border-0 bg-transparent">
                      <img src={prodcompare} alt="compare" />
                    </button> */}
                    <Link to={'/product/'+items?._id} className="border-0 bg-transparent">
                      <img src={view} alt="view" />
                    </Link>
                    {/* <button className="border-0 bg-transparent">
                      <img src={addcart} alt="addcart" />
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      {/* <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${location.pathname == "/" ? "product/:id" : ":id"}`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src="images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src="images/lipstick.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="images/lipstick2.jpeg"
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">L.A. Girl</h6>
            <h5 className="product-title">
              Lipstick Multi Colored for Daily Use
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              L.A. Girl is a popular cosmetics brand known for its diverse range
              of makeup products, including lipsticks. L.A. Girl offers a wide
              variety of lipstick shades, catering to different skin tones and
              preferences. They have an extensive color range, from bold and
              vibrant to subtle and neutral.
            </p>
            <p className="price">Rs.150</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "product/:id"
              : location.pathname == "/product/:id"
              ? "product/id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src="images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src="images/blush1.jpeg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="images/blush2.jpeg"
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Forever52</h6>
            <h5 className="product-title">Blush</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Forever52 typically provides a range of blush products in various
              forms, including powder, cream, and liquid blushes. Forever52 is
              known for providing quality makeup products at affordable price
              points. This makes their blushes accessible to a wide range of
              consumers who are looking for budget-friendly yet.
            </p>
            <p className="price">Rs.400</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button>
              <img src="images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src="images/eyeliner2.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="images/eyeliner1.jpeg"
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">L.A. Girl</h6>
            <h5 className="product-title">Eyeliner for Daily Use</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              L.A. Girl is a popular cosmetics brand known for its diverse range
              of makeup products. They have an extensive color range, from bold
              and vibrant to subtle and neutral.
            </p>
            <p className="price">Rs.100</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div> */}
    </>
  );
};

export default ProductCard;
