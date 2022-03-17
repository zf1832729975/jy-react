import { useNavigate } from "react-router-dom";

import Header from "@/components/Header";
export default function Home() {
  const naviagte = useNavigate();
  const onSearch = (keyword) => {
    keyword = encodeURIComponent(keyword).replace("%20", "+");
    console.log("keyword", keyword);
    naviagte("/search/" + keyword);
  };

  return (
    <div>
      <Header onSearch={onSearch}></Header>
    </div>
  );
}
