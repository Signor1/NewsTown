import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Footer = () => {
  const [year, setYear] = useState("");

  //useState for alert msg
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, [year]);

  //initial form values
  const initialValues = {
    email: "",
  };
  //form validation using schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("Required"),
  }); //validation using yup method

  // onsubmit form event
  const onSubmit = (values, { resetForm }) => {
    resetForm({ values: "" });
    setAlert(true);
  };

  //for fading out the alert after 2s
  setTimeout(() => {
    setAlert(false);
  }, 4000);

  return (
    <footer className="w-full h-auto">
      <div
        className="w-full flex justify-center items-center h-auto lg:h-96 text-center bg-slate-700 rounded-lg relative shadow-md"
        id="footer"
      >
        <div className="h-full w-full grid lg:grid-cols-2 lg:gap-0 gap-16 bg-slate-900/80 py-12 p-4 md:py-16 lg:py-0">
          <div className="flex flex-col md:justify-center justify-around md:gap-2 md:px-16 px-4">
            <h5 className="mb-2 md:text-4xl text-2xl font-bold text-gray-300">
              Get Our App!
            </h5>
            <p className="mb-5 text-base text-gray-400 sm:text-lg ">
              Stay up to date with{" "}
              <span className="uppercase text-naija font-medium font-poppins">
                NewsTown
              </span>{" "}
              on iOS &amp; Android. Download the app today.
            </p>
            <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href="/"
                className="w-full sm:w-auto bg-naija hover:bg-gray-900 transition duration-300 focus:ring-1 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
              >
                <svg
                  className="mr-3 w-7 h-7"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="apple"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
                <div className="text-left">
                  <div className="mb-1 text-xs">Download on the</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">
                    Mac App Store
                  </div>
                </div>
              </a>
              <a
                href="/"
                className="w-full sm:w-auto bg-naija hover:bg-gray-900 transition duration-300 focus:ring-1 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
              >
                <svg
                  className="mr-3 w-7 h-7"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google-play"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                  ></path>
                </svg>
                <div className="text-left">
                  <div className="mb-1 text-xs">Get in on</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="md:px-12 px-0">
            <div className="flex flex-col items-center gap-2 w-full justify-center h-full">
              <h5 className="mb-2 md:text-4xl text-2xl font-bold text-gray-300">
                Newsletter!
              </h5>
              <p className="mb-5 text-base text-gray-400 sm:text-lg ">
                Keep up to date with{" "}
                <span className="uppercase text-naija font-medium font-poppins">
                  NewsTown
                </span>{" "}
                latest articles and uploads
              </p>
              {/* Alert message  */}
              {alert && (
                <div
                  id="alert"
                  className="flex px-3 py-2 items-center bg-green-200 text-green-700 rounded-lg my-2"
                  role="alert"
                >
                  <ion-icon name="checkmark-done"></ion-icon>
                  <div className="ml-3 text-sm font-medium text-green-700 flex items-center gap-2">
                    Newsletter Subscription Successful{" "}
                    <ion-icon name="thumbs-up"></ion-icon>
                  </div>
                </div>
              )}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnChange={true}
                validateOnBlur={false}
              >
                <Form className="w-full flex flex-col items-center" action="#">
                  <div className="relative w-full">
                    <div className="flex absolute top-4 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-slate-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>

                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="block p-4 pl-10 w-full bg-gray-200 border-none outline-none text-slate-600 text-sm rounded-lg focus:ring-2 focus:ring-naija"
                      placeholder="E-mail Address..."
                    />
                    <ErrorMessage name="email">
                      {(errorMsg) => (
                        <div className="font-medium pt-1 ml-2 text-red-500 text-xs md:text-base font-poppins flex items-center">
                          {errorMsg} <ion-icon name="alert"></ion-icon>
                        </div>
                      )}
                    </ErrorMessage>
                    <button
                      type="submit"
                      className="flex items-center absolute right-2 top-1.5 bg-naija hover:bg-gray-900 transition duration-300 focus:ring-1 focus:outline-none focus:ring-gray-300 text-white rounded-lg md:px-4 px-2 py-2 md:gap-1"
                    >
                      <ion-icon name="navigate-outline"></ion-icon>
                      Subscribe
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {/* Below footer  */}
      <div className="w-full">
        <div className="md:p-4 bg-slate-700 px-6 py-10 md:py-8">
          <div className="md:flex md:justify-between py-8">
            <div className="mb-6 md:mb-0">
              <Link
                to="/"
                className="text-slate-300 font-medium uppercase text-lg md:text-xl flex gap-1 items-center font-poppins group"
                id="logo"
              >
                <ion-icon name="megaphone-outline"></ion-icon>
                <span className="tracking-wide text-naija">NewsTown</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-naija uppercase ">
                  Resources
                </h2>
                <ul className="text-gray-400 text-sm">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Advertise
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-naija uppercase ">
                  Follow us
                </h2>
                <ul className="text-gray-400 text-sm">
                  <li className="mb-4">
                    <a
                      href="https://twitter.com/OneSignor?t=xTu8ujiP_M3nibDoFjsUUA&s=09"
                      className="hover:underline "
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="javascript(0)" className="hover:underline">
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-naija uppercase">
                  Legal
                </h2>
                <ul className="text-gray-400 text-sm">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-400 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-xs text-gray-400 sm:text-center ">
              © {year}{" "}
              <Link to="/" className="hover:underline">
                NewsTown
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="/" className="text-gray-400 hover:text-naija ">
                <ion-icon name="logo-facebook"></ion-icon>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="/" className="text-gray-400 hover:text-naija">
                <ion-icon name="logo-instagram"></ion-icon>
                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="https://github.com/Signor1"
                className="text-gray-400 hover:text-naija"
              >
                <ion-icon name="logo-github"></ion-icon>
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
