import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getFaqs = async () => {
  const response = await axios.get(`${base_url}faq/`);

  return response.data;
};

const faqService = {
  getFaqs,
};
export default faqService;
