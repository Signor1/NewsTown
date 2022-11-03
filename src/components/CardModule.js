import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import ReactPaginate from "react-paginate";

const CardModule = ({ title, data, url }) => {
  // We start with an empty list of Latest news.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  //re-renders on page update
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="p-2 w-full bg-slate-800 rounded-lg shadow-md sm:p-4">
      <div className="mb-4">
        <h5 className="md:text-2xl text-xl font-poppins font-bold uppercase leading-none text-gray-400 pt-3 pl-2">
          {title}
        </h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-slate-400">
          {currentItems.map((post, index) => (
            <li className="py-3 sm:py-4" key={index}>
              <Fade direction="up" duration={500}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 rounded-md border-2 border-slate-400">
                    <img
                      className="h-24 w-28 rounded-md object-cover object-top"
                      src={post.img}
                      alt={post.title}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link to={`${url}/${post.id}`} className="group">
                      <h4 className="text-sm py-1 group-hover:text-naija transition duration-300 font-serif flex items-center gap-2 font-normal leading-none text-slate-400">
                        <ion-icon name="folder-outline"></ion-icon>
                        {post.type}
                      </h4>
                      <h3 className="text-md group-hover:text-gray-300 transition duration-300 font-serif font-semibold text-slate-400 ">
                        {post.title.length > 60
                          ? post.title.slice(0, 60) + "..."
                          : post.title}
                      </h3>
                    </Link>
                  </div>
                </div>
              </Fade>
            </li>
          ))}
        </ul>
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

export default CardModule;
