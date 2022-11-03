import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const PageComp = ({ title, pageData, url }) => {
  // We start with an empty list of Latest news.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  //re-renders on page update
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(pageData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(pageData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, pageData]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % pageData.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="w-full lg:col-span-2 py-8 md:pl-8 lg:pr-0 md:pr-8">
      <Fade direction="left" duration={500}>
        <h1 className="uppercase text-naija font-semibold md:text-4xl text-2xl">
          {title}
        </h1>
      </Fade>
      <div className="w-full mt-12">
        <div className="grid md:grid-cols-2 gap-6">
          {currentItems.map((data, index) => (
            <Fade direction="up" duration={500} key={index}>
              <div className="bg-slate-800 h-auto rounded-lg border border-slate-600 shadow-md relative">
                <img
                  className="rounded-t-lg h-44 w-full object-cover object-top"
                  src={data.img}
                  alt={data.title}
                />
                <div className="px-3 py-4 w-full">
                  <h2 className="flex items-center gap-1 text-naija md:text-base text-sm font-light font-poppins rounded-t-lg w-full py-2 pl-4 absolute top-0 left-0 bg-slate-700">
                    <ion-icon name="folder-outline"></ion-icon>
                    {data.type}
                  </h2>

                  <ul className="list-none flex justify-between text-slate-400 md:text-sm text-xs font-light font-poppins w-full">
                    <li className="flex items-center gap-1">
                      <ion-icon name="calendar-outline"></ion-icon>
                      {data.time}
                    </li>
                    <li className="flex items-center gap-1">
                      <ion-icon name="person-outline"></ion-icon>
                      {data.author}
                    </li>
                    <li className="flex items-center gap-1">
                      <ion-icon name="chatbubbles-outline"></ion-icon>
                      {data.comments.length === 0 || null
                        ? "0"
                        : data.comments.length}
                    </li>
                  </ul>
                  <Link
                    to={`${url}/${data.id}`}
                    className="mt-4 font-normal text-slate-300 block pb-2 transition duration-200 hover:text-naija font-poppins md:text-lg text-md"
                  >
                    {data.title.length > 65
                      ? data.title.slice(0, 65) + "..."
                      : data.title}
                  </Link>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center items-center mt-8 md:gap-0 gap-1 pb-4"
        pageLinkClassName="py-2 md:px-4 px-3 md:text-sm text-xs font-medium text-gray-300 bg-naija hover:bg-gray-300 hover:text-naija border border-slate-600 transition-all duration-300"
        previousLinkClassName="py-2 md:px-4 px-3 md:text-sm text-xs font-medium text-gray-300 bg-naija hover:bg-gray-300 hover:text-naija border border-slate-600 transition-all duration-300"
        nextLinkClassName="py-2 md:px-4 px-3 md:text-sm text-xs font-medium text-gray-300 bg-naija hover:bg-gray-300 hover:text-naija border border-slate-600 transition-all duration-300"
        activeLinkClassName="bg-gray-300 text-slate-900"
      />
    </div>
  );
};

export default PageComp;
