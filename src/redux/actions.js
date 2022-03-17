import { SET_PRODUCT_TRENDS } from "./action-types";

import axios from "axios";

export const getproductTrends = (keyword) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: "http://3.141.23.218:5000/interview/keyword_search",
      data: {
        login_token: "INTERVIEW_SIMPLY2021",
        search_phrase: keyword,
      },
    }).then(({ data }) => {
      console.log("data", data);
      const RE = new RegExp(`(${keyword})`);
      dispatch({
        type: SET_PRODUCT_TRENDS,
        playload: data.data.product_trends.map((item) => {
          item.title = item.name.replace(RE, `<em>$1</em>`);
          return item;
        }),
      });
    });
  };
};
