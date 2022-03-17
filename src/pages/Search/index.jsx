/**
 *
 *
 */

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getproductTrends } from "@/redux/actions";
import Header from "@/components/Header";
import "./index.scss";
import { Grid } from "@mui/material";

import { useParams } from "react-router-dom";

function Search() {
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const initKeyword = decodeURIComponent(params.keyword.replace("+", " "));

  const productTrends = useSelector((state) => state.productTrends);
  const dispatch = useDispatch();

  const onSearch = (keyword) => {
    setLoading(true);
    dispatch(getproductTrends(keyword)).finally(() => {
      setLoading(false);
    });
  };
  useEffect(() => {
    onSearch(initKeyword);
  }, []);

  return (
    <div className="search">
      <Header keyword={initKeyword} onSearch={onSearch}></Header>
      <div className="search-container">
        <div className="title">Related product trends</div>
        {loading ? (
          <div>加载中...</div>
        ) : (
          <div>
            <Grid container spacing={2}>
              {productTrends.map((item, index) => {
                return (
                  <Grid item xs={3} key={index}>
                    <div className="card-item">
                      <div
                        className="card-title"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      ></div>
                      <div className="chart">echarts 图表</div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
