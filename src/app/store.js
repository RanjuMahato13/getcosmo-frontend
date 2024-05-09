import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import productReducer from "../features/products/productSlice";
import blogReducer from "../features/blogs/blogSlice";
import contactReducer from "../features/contact/contactSlice";
import suggestionReducer from "../features/suggestion/suggestionSlice";
import faqReducer from "../features/faq/faqSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    blog: blogReducer,
    contact: contactReducer,
    suggestion: suggestionReducer,
    faq: faqReducer,
  },
});
