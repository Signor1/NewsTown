import React, { useState, useEffect } from "react";
import CommentDisplay from "./CommentDisplay";
import { Fade } from "react-awesome-reveal";

//for comment validation
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SingleVideoC = ({ title, singleData }) => {
  //useState for alert msg
  const [alert, setAlert] = useState(false);
  //useState for number of comments
  const [commentNum, setCommentNum] = useState(null);
  console.log(commentNum);

  //initial form values
  const initialValues = {
    comment: "",
    name: "",
    email: "",
  };
  //form validation using schema
  const validationSchema = Yup.object({
    comment: Yup.string().required("Required if you want to comment"),
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
  }); //validation using yup method

  // onsubmit form event
  const onSubmit = (values, { resetForm }) => {
    singleData[0].comments.push(values);
    resetForm({ values: "" });
    setAlert(true);
  };

  //for fading out the alert after 2s
  setTimeout(() => {
    setAlert(false);
  }, 2000);

  const numOfComments = singleData[0].comments.length;
  const commentData = singleData[0].comments;
  useEffect(() => {
    setCommentNum(numOfComments);
  }, [singleData, numOfComments]);

  return (
    <div className="w-full lg:col-span-2 py-8 md:pl-8 lg:pr-0 md:pr-8">
      <Fade direction="left" duration={500}>
        <h1 className="uppercase text-naija font-semibold md:text-4xl text-2xl">
          {title}
        </h1>
      </Fade>
      <div className="w-full mt-12">
        <Fade direction="up" duration={500}>
          <h2 className="text-slate-300 font-serif font-medium md:text-3xl text-xl">
            {singleData[0].title}
          </h2>
          <div className="w-full h-96 my-4 border border-slate-300 rounded-lg">
            <img
              src={singleData[0].img}
              alt="NewsImage"
              className="rounded-lg object-cover object-top w-full h-full"
            />
          </div>
        </Fade>
        <div className="flex">
          <ul className="list-none flex md:gap-8 gap-3 text-slate-400 md:text-base text-xs font-light font-poppins">
            <li className="flex items-center gap-1">
              <ion-icon name="folder-outline"></ion-icon>
              {singleData[0].type}
            </li>
            <li className="flex items-center gap-1">
              <ion-icon name="calendar-outline"></ion-icon>
              {singleData[0].time}
            </li>
            <li className="flex items-center gap-1">
              <ion-icon name="time-outline"></ion-icon>
              {singleData[0].duration}
            </li>
            <li className="flex items-center gap-1">
              <ion-icon name="chatbubbles-outline"></ion-icon>
              {singleData[0].comments.length === 0 || null
                ? "0"
                : singleData[0].comments.length}
            </li>
          </ul>
        </div>
        <p
          className="mt-8 text-justify text-slate-400 text-base font-poppins tracking-wider leading-8 first-line:uppercase first-line:tracking-widest
            md:first-letter:text-7xl first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-slate-300
            first-letter:mr-3 first-letter:float-left"
        >
          {singleData[0].body}
        </p>
        <p className="text-slate-400 text-base font-poppins leading-8 my-4">
          Click on the link below to watch and enjoy!
        </p>
        <a
          href={singleData[0].source}
          target="_blank"
          rel="noreferrer"
          className="text-slate-200 md:text-base text-sm font-poppins hover:text-naija hover:underline transition-all duration-200 flex items-center gap-2"
        >
          <ion-icon name="logo-youtube"></ion-icon>
          {singleData[0].source}
        </a>
        <div className="w-full flex justify-center items-center my-12">
          <a
            href="/"
            className="flex items-center gap-1 bg-naija text-white py-4 px-6 text-md font-medium focus:ring-2 border-none outline-none focus:outline-none focus:ring-gray-200 hover:gap-2 rounded-lg"
          >
            <ion-icon name="download"></ion-icon>
            Download
            <ion-icon name="videocam"></ion-icon>
          </a>
        </div>
      </div>
      {/* Comment Section  */}
      <CommentDisplay commentData={commentData} />
      <div className="p-6 w-full mt-16 bg-slate-700 rounded-lg border border-slate-500 shadow-md sm:p-6 md:p-8 ">
        {/* Form for the comment section  */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnChange={true}
          validateOnBlur={true}
        >
          <Form className="space-y-6" action="#">
            <h5 className="text-2xl font-medium text-slate-200 font-poppins">
              Comments
            </h5>
            {/* Alert message  */}
            {alert && (
              <div
                id="alert"
                className="flex p-3 items-center bg-green-200 text-green-700 rounded-lg"
                role="alert"
              >
                <ion-icon name="checkmark-done"></ion-icon>
                <div className="ml-3 text-sm font-medium text-green-700 flex items-center gap-2">
                  Comment sent <ion-icon name="thumbs-up"></ion-icon>
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <div className="rounded-lg mt-1 hidden md:flex  text-2xl text-slate-300 border border-slate-300 h-12 w-12 justify-center items-center">
                <ion-icon name="person"></ion-icon>
              </div>
              <div className="w-full">
                <Field
                  as="textarea"
                  cols="30"
                  rows="5"
                  className="bg-gray-300 border-none text-slate-900 text-sm rounded-lg focus:ring-naija focus:ring-2 block w-full p-2.5 resize-y"
                  placeholder="Write your comments here..."
                  id="comment"
                  name="comment"
                />
                <ErrorMessage name="comment">
                  {(errorMsg) => (
                    <div className="font-medium pt-1 ml-2 text-red-500 text-xs md:text-base font-poppins flex items-center">
                      {errorMsg} <ion-icon name="alert"></ion-icon>
                    </div>
                  )}
                </ErrorMessage>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block mb-2 ml-2 text-sm font-medium text-slate-300"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Name..."
                  className="bg-gray-300 border-none text-slate-900 text-sm rounded-lg focus:ring-naija focus:ring-2 block w-full p-2.5"
                />
                <ErrorMessage name="name">
                  {(errorMsg) => (
                    <div className="font-medium pt-1 ml-2 text-red-500 text-xs md:text-base font-poppins flex items-center">
                      {errorMsg} <ion-icon name="alert"></ion-icon>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 ml-2 text-sm font-medium text-slate-300"
                >
                  E-mail
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter E-mail..."
                  className="bg-gray-300 border-none text-slate-900 text-sm rounded-lg focus:ring-naija focus:ring-2 block w-full p-2.5"
                />
                <ErrorMessage name="email">
                  {(errorMsg) => (
                    <div className="font-medium pt-1 ml-2 text-red-500 text-xs md:text-base font-poppins flex items-center">
                      {errorMsg} <ion-icon name="alert"></ion-icon>
                    </div>
                  )}
                </ErrorMessage>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center bg-naija hover:bg-gray-900 transition duration-300 focus:ring-1 focus:outline-none focus:ring-gray-300 text-white rounded-lg md:px-4 px-4 py-2 md:gap-1"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default SingleVideoC;
