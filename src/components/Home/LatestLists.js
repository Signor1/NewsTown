import React, { useState, useEffect } from "react";
import { latestData } from "../DataFiles/LatestData";
import ReactPaginate from "react-paginate";
import LatestNews from "./LatestNews";

const LatestList = () => {
  const lists = latestData;
  // We start with an empty list of Latest news.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  //re-renders on page update
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(lists.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(lists.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, lists]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % lists.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="w-full mb-12">
      <LatestNews title="Latest" data={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center items-center mt-8 md:gap-0 gap-1"
        pageLinkClassName="py-2 md:px-4 px-3 md:text-sm text-xs font-medium text-gray-300 bg-naija hover:bg-gray-300 hover:text-naija border border-slate-900 transition-all duration-300"
        previousLinkClassName="py-2 md:px-4 px-3 md:text-sm text-xs font-medium text-gray-300 bg-naija hover:bg-gray-300 hover:text-naija border border-slate-900 transition-all duration-300"
        nextLinkClassName="py-2 md:px-4 px-3 md:text-sm text-xs font-medium text-gray-300 bg-naija hover:bg-gray-300 hover:text-naija border border-slate-900 transition-all duration-300"
        activeLinkClassName="bg-gray-300 text-slate-900"
      />
    </div>
  );
};

export default LatestList;
