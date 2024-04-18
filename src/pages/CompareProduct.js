import React from "react"
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
const CompareProduct = () => {
  return (
    <>
    <Meta title={"Compare Products"} />
     <BreadCrumb  title="Compare Products"/>
     <Container class1="compare-product-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/foundation.jpeg" alt="foundation" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Foundation</h5>
                            <h6 className="price mb-3 mt-3">Rs.200</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand</h5>
                                    <p>L.A. Girl</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type</h5>
                                    <p>Foundation</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Shades</h5>
                                    <p>Natural</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/foundation2.jpg" alt="foundation" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Foundation</h5>
                            <h6 className="price mb-3 mt-3">Rs.230</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand</h5>
                                    <p>Swiss Beauty</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type</h5>
                                    <p>Foundation</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability</h5>
                                    <p>Out of Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Shades</h5>
                                    <p>Natural</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </Container>
     </>
  );
};

export default CompareProduct;