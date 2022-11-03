import React from "react";

const Modal = ({ toggleModal, children }) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-40 w-full inset-0 h-full transition-all duration-1000 flex justify-center items-center bg-slate-900/70">
      <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
        <div className="relative mt-20 py-6 md:mt-0 bg-slate-700 rounded-lg shadow">
          <button
            type="button"
            onClick={toggleModal}
            className="absolute top-4 right-3 text-gray-400 bg-transparent hover:bg-gray-400 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
