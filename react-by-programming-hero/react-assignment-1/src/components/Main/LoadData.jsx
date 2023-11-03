import { useEffect, useState } from "react";
import ShowData from "../ShowData/ShowData";
import Bookmark from "../Bookmark/Bookmark";

function LoadData() {
  const [datas, setData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const btnHandle = (data) => {
    setCart([...cart, data]);
  };
  return (
    <div className="flex">
      <div className="">
        {datas.map((data) => (
          <ShowData key={data.id} data={data} btnHandle={btnHandle} />
        ))}
      </div>
      <div className="w-[411px] border ml-6">
        <Bookmark cart={cart} />
      </div>
    </div>
  );
}

export default LoadData;
