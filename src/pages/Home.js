import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import OfferProduct from "../components/OfferProduct";
import Container from "../components/Container";
import moment from "moment";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import { getAllProducts } from "../features/products/productSlice";
import { addToWishlist } from "../features/products/productSlice";

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state.product.product);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    getBlogs();
    getallProducts();
  }, []);
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };
  const getallProducts = () => {
    dispatch(getAllProducts());
  };
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  const handleShopNow = (tag) => {
    getallProducts({ tag });
    navigate("/product?tag=" + tag);
  };
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img
                src="images/main-banner1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h5>Cosmetics-in-offer</h5>
                <p>Save more with coupons & up to 70% off!</p>
                <button
                  className="button"
                  onClick={() => handleShopNow("offer")}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="small-banner position-relative p-3">
                <img
                  src="images/cartbannerlipstick.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h5>Cosmetics-in-popular</h5>
                  <p>Save more with coupons & up to 70% off!</p>
                  <button
                    className="button"
                    onClick={() => handleShopNow("popular")}
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              <div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Delivery</h6>
                    <p className="mb-0">From all orders over Rs.1000</p>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-02.png" alt="services" />
                <div>
                  <h6>Happy Sell</h6>
                  <p className="mb-0">Purpose of our lives is to be happy</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-03.png" alt="services" />
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Shop with an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-04.png" alt="services" />
                <div>
                  <h6>Affordable Price</h6>
                  <p className="mb-0">Get product in low price</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-05.png" alt="services" />
                <div>
                  <h6>100% Privacy</h6>
                  <p className="mb-0">Your privacy is concerned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between align-items-center">
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Skin Care</h6>
                  <p>4 Items</p>
                </div>
                <img
                  src="images/skincare.jpg"
                  alt="skincare"
                  className="small-image"
                />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6> Face Makeup</h6>
                  <p>8 Items</p>
                </div>
                <img
                  src="images/facemakeup.jpg"
                  alt="facemakeup"
                  className="small-image"
                />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Hair Care</h6>
                  <p>3 Items</p>
                </div>
                <img
                  src="images/Haircare.jpg"
                  alt="haircare"
                  className="small-image"
                />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Accessories</h6>
                  <p>10 Items</p>
                </div>
                <img
                  src="images/accessories.jpg"
                  alt="accessories"
                  className="small-image"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collections</h3>
          </div>
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "featured") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => {
                            addToWish(item?._id);
                          }}
                        >
                          <img src="images/wish.svg" alt="wishlist" />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images?.[0]?.url}
                          className="img-fluid"
                          alt="product image"
                        />
                        <img
                          src={
                            item?.images?.[1]?.url
                              ? item?.images?.[1]?.url
                              : item?.images?.[0]?.url
                          }
                          className="img-fluid"
                          alt="product image"
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">
                          {item?.title?.length > 31
                            ? item?.title.substring(0, 30) + "..."
                            : item?.title}
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={parseInt(item?.totalrating)}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">Rs.{item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          {/* <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button> */}
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src={view}
                              alt="view"
                            />
                          </button>
                          {/* <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>
      <Container class1="offer-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Offer Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "offer") {
                return (
                  <OfferProduct
                    key={index}
                    id={item?._id}
                    image={item?.images?.[0].url}
                    brand={item?.brand}
                    title={item?.title}
                    totalrating={item?.totalrating.toString()}
                    price={item?.price}
                    sold={item?.sold}
                    quantity={item?.quantity}
                  />
                );
              }
            })}
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "popular") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => {
                            addToWish(item?._id);
                          }}
                        >
                          <img src="images/wish.svg" alt="wishlist" />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images?.[0]?.url}
                          className="img-fluid"
                          alt="product image"
                        />
                        <img
                          src={
                            item?.images?.[1]?.url
                              ? item?.images?.[1]?.url
                              : item?.images?.[0]?.url
                          }
                          className="img-fluid"
                          alt="product image"
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={parseInt(item?.totalrating)}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">Rs.{item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          {/* <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button> */}
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src={view}
                              alt="view"
                            />
                          </button>
                          {/* <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blog</h3>
            </div>
          </div>
          <div className="row">
            {Array.isArray(blogState) &&
              blogState.map((item, index) => {
                if (index <= 3) {
                  return (
                    <div className="col-3" key={index}>
                      <BlogCard
                        id={item?._id}
                        title={item?.title}
                        description={item?.description}
                        image={item?.images[0]?.url}
                        date={moment(item?.createdAt).format(
                          "MMMM Do YYYY, h:mm a"
                        )}
                      />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
