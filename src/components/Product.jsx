import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import axios from "axios";

function Product() {
  const [data, setData] = useState([]);
  const [pageno, setPageno] = useState(1);
  const itemsPerPage = 8;
  const [search, setSearch] = useState();


  const [userName, setUserName] = useState("");
  

  const searchData = (e) => {
    setSearch(e.target.value);
    setPageno(1); 
  };

  const pagePrev = () => {
    if (pageno == 1) {
      setPageno(1);
    } else setPageno(pageno - 1);
  };

  const pageNext = () => {
    const startIndex = pageno * itemsPerPage;
    if (startIndex < filteredData.length) {
      setPageno(pageno + 1);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');
    if (!token || !userName) {
      window.location.href = '/login'; 
    } else {
      setUserName(userName);
      axios
        .get('https://intern-task-api.bravo68web.workers.dev/api/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    }
  }, []);
  const filteredData = data.filter((searchObj) => {
    if (search) {
      return searchObj.title
        .toLowerCase()
        .includes(search.toLocaleLowerCase());
    }
    return true; 
  })

  const startIndex = (pageno - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="border-4 border-gray-800 w-[80rem] h-[800px] flex flex-col items-center rounded-[20px] relative p-5">
        <div className="font-bold text-[20px] mb-5">Logged in as "{userName}"</div>

        <input
          onChange={searchData}
          value={search}
          type="text"
          placeholder="Search"
          className="border-4 border-gray-800 w-full p-2 rounded-[10px] mb-5 font-bold"
        />

        <div className="flex flex-wrap flex-row justify-around gap-8 mb-20">
          {paginatedData.length > 0 ? (
            paginatedData.map((dataObj) => (
              <Card
                key={dataObj.id}
                title={dataObj.title}
                thumbnail={dataObj.thumbnail}
                price={dataObj.price}
              />
            ))
          ) : (
            <div className="text-center w-full">No products found.</div>
          )}
        </div>

        
        <div className="absolute bottom-5 left-0 right-0 flex justify-center">
          <Pagination pageNext={pageNext} pagePrev={pagePrev} pageno={pageno} />
        </div>
      </div>
    </div>
  );
}

export default Product;
