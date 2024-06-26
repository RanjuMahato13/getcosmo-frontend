import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/products/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };
  const wishlistState = useSelector((state) => {
    return state?.auth?.wishlist?.wishlist;
  });
  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };
  useEffect(() => {
    getWishlistFromDb();
  }, []);
  return (
    <>
      <Meta title={"Favourite Wishlist"} />
      <BreadCrumb title="Favourite Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishlistState && wishlistState.length === 0 && (
            <div className="text-center fs-3">No Data in Wishlist</div>
          )}
          {wishlistState &&
            wishlistState.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <div className="wishlist-card  position-relative">
                    <img
                      onClick={() => {
                        removeFromWishlist(item?._id);
                      }}
                      src="images/cross.svg"
                      alt="cross"
                      className="position-absolute cross img-fluid"
                    />
                    <div className="wishlist-card-image bg-white">
                      <img
                        src={
                          item?.images[0].url
                            ? item?.images[0].url
                            : "images/foundation.jpeg"
                        }
                        className="img-fluid d-block mx-auto"
                        alt="foundation"
                        width={160}
                      />
                    </div>
                    <div className="py-3 px-3">
                      <h5 className="title">{item?.title}</h5>
                      <h6 className="price">{item?.price}</h6>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* <div className="col-3">
            <div className="wishlist-card  position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/foundation.jpeg"
                  className="img-fluid w-100"
                  alt="foundation"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">Foundation</h5>
                <h6 className="price">Rs.200</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card  position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/foundation.jpeg"
                  className="img-fluid w-100"
                  alt="foundation"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">Foundation</h5>
                <h6 className="price">Rs.200</h6>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
