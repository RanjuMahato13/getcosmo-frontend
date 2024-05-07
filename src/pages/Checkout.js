import React, {useEffect, useState} from "react";
import { Link, resolvePath, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from 'formik';
import * as yup from "yup";
import axios from "axios";
import { getUserCart } from "../features/user/userSlice";

const deliverySchema = yup.object({
 firstName: yup.string().required("First Name is Required"),
 lastName:  yup.string().required("Last Name is Required"),
 address: yup.string().required("Address Details are Required"),
 phoneNumber:  yup.number().required("Number is Required"),
 city:  yup.string().required("City Name is Required"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.auth.cartProducts)
  const authState = useSelector(state => state.auth)
  const [totalAmount, setTotalAmount] = useState(null);
  const [deliveryInfo, setDeliveryInfo] = useState(null);
  //const [cartProductState, setCartProductState] = useState([])
  const navigate = useNavigate();
  
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
     sum = sum + (Number(cartState[index].quantity)* cartState[index].price)
     setTotalAmount(sum);
    }
  },[cartState])
  const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const config2 = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};

  useEffect (() => {
    if (authState?.orderedProduct?.order !== null && authState?.orderedProduuct?.success == true){
      navigate("/my-orders")
    }
  }, [authState])
    const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          address: "",  
          phoneNumber: "",
          city: "",
        },
        validationSchema: deliverySchema,
        onSubmit: async (values) => {
        alert(JSON.stringify(values))
          await setDeliveryInfo(values)
        //  setTimeout(() => {
        //   checkOutHandler()
        //  }, 300);
        },
  });
  
  // const loadScript = (src) => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("root");
  //     script.src = src;
  //     script.onload= () => {
  //       resolve(true)
  //     }
  //     script.onerror = () => {
  //       resolve(false)
  //     }
  //     document.body.appendChild(script)
  //   })
  // }

  // checkout handler
  // const checkoutHandler = async() => {
  //   const res = await loadScript("")
  //   if (!res) {
  //     alert("Esewapay failed to Load!")
  //     return;
  //   }
  //   const result = await axios.post("http://localhost:8000/api/user/order/checkout")
  //   if(!result) {
  //     alert("Something Went Wrong!")
  //     return;
  //   }
  //   const {amount, id:order_id, rupees} = result.data

  // }
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">GetCosmo</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">
                    Delivery
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Ranjana Mahato (ranjana@gmail.com)
              </p>
              <h4 className="mb-3">Delivery Address</h4>
              <form onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="city" value={formik.values.city} onChange={formik.handleChange("city")} onBlur={formik.handleBlur("city")} className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select City
                    </option>
                    <option value="">
                      Kathmandu
                    </option>
                    <option value="" >
                      Lalitpur
                    </option>
                    <option value="" >
                      Bhaktapur
                    </option>
                    <option value="" >
                     Chitwan
                    </option>
                    <option value="" >
                      Pokhara
                    </option>
                  </select>
                  <div className="error ms-2 my-1">
                    {
                      formik.touched.city && formik.errors.city
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="firstName"
                    value={formik.values.firstName} 
                    onChange={formik.handleChange("firstName")} 
                    onBlur={formik.handleBlur("firstName")} 
                  />
                   <div className="error ms-2 my-1">
                    {
                      formik.touched.firstName && formik.errors.firstName
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    name="lastName"
                    value={formik.values.lastName} 
                    onChange={formik.handleChange("lastName")} 
                    onBlur={formik.handleBlur("lastName")} 
                  />
                   <div className="error ms-2 my-1">
                    {
                      formik.touched.lastName && formik.errors.lastName
                    }
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="address"
                    value={formik.values.address} 
                    onChange={formik.handleChange("address")} 
                    onBlur={formik.handleBlur("address")} 
                  />
                   <div className="error ms-2 my-1">
                    {
                      formik.touched.address && formik.errors.address
                    }
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="form-control"
                    name="phoneNumber"
                    value={formik.values.phoneNumber} 
                    onChange={formik.handleChange("phoneNumber")} 
                    onBlur={formik.handleBlur("phoneNumber")} 
                  />
                   <div className="error ms-2 my-1">
                    {
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    value={formik.values.city} 
                    onChange={formik.handleChange("city")} 
                    onBlur={formik.handleBlur("city")} 
                  />
                  <div className="error ms-2 my-1">
                    {
                      formik.touched.city && formik.errors.city
                    }
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue to Delivery
                    </Link>
                    <button className="button" type="submit">Place Order</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {
                cartState && cartState?.map((item, index) => {
                  return(
                    <div key={index} className="d-flex gap-10 mb-2 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      {item?.quantity}
                    </span>
                    <img  width={100} height={100} src={item?.productId?.images[0]?.url} alt="product" />
                  </div>
                  <div>
                    <h5 className="total-price">{item?.productId?.title}</h5>
                    <p className="total-price">{item?.shade?.title}</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">Rs. {item?.price * item?.quantity}</h5>
                </div>
              </div>
                  )
                })
              }
              
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">Rs. {totalAmount?totalAmount:"0"}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Delivery</p>
                <p className="mb-0 total-price">Rs. 5</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">Rs. {totalAmount?totalAmount+5:"0"} </h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
