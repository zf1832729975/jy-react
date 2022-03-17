import "./index.scss";

import { Input, Button } from "@mui/material";
import { useState } from "react";
import { Search } from "@mui/icons-material";

import { Link } from "react-router-dom";

export default function Header(props) {
  const [keyword, setKeyword] = useState(props.keyword || "");

  const search = () => {
    if (keyword) {
      props.onSearch(keyword);
    } else {
      alert("请输入关键字");
    }
  };

  const inputChange = (event) => {
    setKeyword(event.target.value);
  };

  const onKeyUp = (event) => {
    console.log('event.code', event.code)
    console.log(event)
    if (event.code === "Enter") {
      inputChange(event);
      setTimeout(search);
    }
  };

  return (
    <header className="site-heaer">
      <div className="header-inner w1200">
        <Link to="/" className="logo">
          <b>Best</b>Search
        </Link>

        <div className="input-box">
          <Input
            onChange={inputChange}
            value={keyword}
            onKeyUp={onKeyUp}
            placeholder="Search for new products in 961k stores"
          ></Input>
        </div>

        <Button variant="outlined" onClick={search}>
          <Search></Search>
        </Button>
      </div>
    </header>
  );
}
