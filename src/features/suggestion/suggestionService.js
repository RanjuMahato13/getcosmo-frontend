import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const postSuggestion = async (suggestionData) => {
  const response = await axios.post(`${base_url}suggestion`, suggestionData);
  if (response.data) {
    return response.data;
  }
};

export const suggestionService = {
  postSuggestion,
};
