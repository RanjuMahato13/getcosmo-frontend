import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import { useLocation, useParams } from "react-router-dom";

const OurProduct = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTag = searchParams.get("tag");
  const [grid, setGrid] = useState(4);
  const productState = useSelector((state) => state?.product?.product);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  // Filter States
  const [tag, setTag] = useState([null]);
  const [category, setCategory] = useState([null]);
  const [brand, setBrand] = useState([null]);
  const [sort, setSort] = useState([null]);

  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newtags = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      newBrands.push(element.brand);
      category.push(element.category);
      newtags.push(element.tags);
    }
    setBrands(newBrands);
    setCategories(category);
    setTags(newtags);
  }, [productState]);
  //console.log([...new Set(brands)], [...new Set(categories)], [...new Set(tags)]);

  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, [sort, tag, brand, category]);

  const getProducts = () => {
    dispatch(getAllProducts({ sort, tag, brand, category }));
  };

  useEffect(() => {
    if (searchTag) {
      setTag(searchTag);
    }
  }, []);

  return (
    <>
      <Meta title={"Our Product"} />
      <BreadCrumb title="Our Product" />
      <Container class1="product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  {categories &&
                    [...new Set(categories)].map((item, index) => {
                      return (
                        <li key={index} onClick={() => setCategory(item)}>
                          {item}
                        </li>
                      );
                    })}
                  {/* <li>Face Makeup</li>
                  <li>Skin Care</li>
                  <li>Hair Care</li>
                  <li>Accessories</li> */}
                </ul>
              </div>
            </div>
            {/* <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availabilty</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of Stock (0)
                    </label>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="filter-card mb-3">
              <h3 className="filter-title">Products Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {tags &&
                    [...new Set(tags)].map((item, index) => {
                      return (
                        <span
                          onClick={() => setTag(item)}
                          key={index}
                          className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                        >
                          {item}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Brands</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {brands &&
                    [...new Set(brands)].map((item, index) => {
                      return (
                        <span
                          onClick={() => setBrand(item)}
                          key={index}
                          className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                        >
                          {item}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    className="form-control form-select"
                    id=""
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="title">Alphabetically, A-Z</option>
                    <option value="-title">Alphabetically, A-Z</option>
                    <option value="price">Price, low to high</option>
                    <option value="-price">Price, high to low</option>
                    <option value="createdAt">Date, old to new</option>
                    <option value="-createdAt">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard
                  data={productState ? productState : []}
                  grid={grid}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurProduct;
