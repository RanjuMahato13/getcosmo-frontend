import React from "react";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align -items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
               <h2 className="mb-0 text-white">Sign Up for More Notifications</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                type="text"
                className="form-control py-1"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Sign up
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">Address: Chabahil Plaza, Kathmandu</address>
                <a href="Phone: 9805899990 / 9876543210"className="mt-4 d-block mb-3 text-white">Phone: 9805899990 / 9876543210</a>
                <a href="Hours:10:00am - 5:00pm, Sunday-Friday"className="mt-4 d-block mb-3 text-white">Hours:10:00am - 5:00pm, Sunday-Friday</a>
              </div>
            </div>
            <div className="col-3">
            <h4 className="text-white mb-4">Information</h4>
              <div  className="footer-links d-flex flex-column">
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link to="/delivery-information"  className="text-white py-2 mb-1">Delivery Information</Link>
                <Link to="/terms-conditions"  className="text-white py-2 mb-1">Terms and Conditions</Link>
                <Link to="/refund-policy"  className="text-white py-2 mb-1">Refund Policy</Link>
              </div>
              </div>
            </div>
            <div className="col-3">
            <h4 className="text-white mb-4">Account</h4>
              <div>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact Us</Link>
              </div>
              </div>
            </div>
            <div className="col-2">
            <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Makeup</Link>
                <Link className="text-white py-2 mb-1">Skin care</Link>
                <Link className="text-white py-2 mb-1">Hair care</Link>
                <Link className="text-white py-2 mb-1">Accessories</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()}; Powered by Getcosmo Product</p>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;