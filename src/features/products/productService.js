import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";
console.log(config);
const getProducts = async (data) => {
  console.log(data);
  const response = await axios.get(`${base_url}product?${data?.brand?`brand=${data?.brand}&&`:""}${data?.tag?`tags=${data?.tag}&&`:""}${data?.category?`category=${data?.category}&&`:""}${data?.sort?`sort=${data?.sort}&&`:""}`);
  if (response.data) {
    return response.data;
  }
};
const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response.data) {
    return response.data;
  }
};
const addToWishlist = async (prodId) => {
  console.log(`${base_url}product/wishlist`);
  // const response = await axios.put(
  //   `${base_url}product/wishlist`,
  //   { prodId },
  //   config
  // );
  axios
    .put(`http://localhost:8000/api/product/wishlist`, { prodId }, config)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
const rateProduct = async (data) => {
  const response = await axios.put(`${base_url}product/rating`, data, config);
  if (response.data) {
    return response.data;
  }
};
export const productService = {
  getProducts,
  addToWishlist,
  getSingleProduct,
  rateProduct,
};
