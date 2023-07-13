"use client";

// Form validation
import { useFormik } from "formik";
import * as Yup from "yup";

// Next
import { useRouter } from "next/navigation";
import { NextApiResponse } from 'next'

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

// Types
import { Request } from "@/types/Request";



// Variables
// @ts-ignore
const parseJSON = (resp: NextApiResponse) => (resp.json ? resp.json() : resp);

const checkStatus = (resp: NextApiResponse) => {
  if (Number(resp.status) >= 200 && Number(resp.status) < 300) {
    return resp;
  }
  // @ts-ignore
  return parseJSON(resp).then(resp => {
    throw resp;
  });
};

const headers = {
  'Content-Type': 'application/json',
};



export default function ContactForm() {

  // Router
  const router = useRouter();

  // Submit request values function
  async function handleRequestSubmit(values: Request) {
    try {
      const response = await fetch('http://localhost:1337/api/requests', {
        method: 'POST',
        headers,
        body: JSON.stringify({ data: values }),
      })
      // @ts-ignore
        .then(checkStatus)
        .then(parseJSON);
    } catch (error) {
      //setErrorRestaurants(error);
      //console.log("Error!");
    }
  }

  // Form validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string()
        .max(48, "Subject must be 20 characters or less.")
        .required("Subject is required"),
      message: Yup.string()
        .max(400, "Message has max 400 characters.")
        .required("Message is required"),
    }),

    onSubmit: (values) => {
      //console.log("form submitted");
      //console.log(values);
      // @ts-ignore
      handleRequestSubmit(values);
    },
  });



  return (
    <div className="ContactForm section / bg-prim-100 text-center / lg:p-[0]">
      <div className="Container / px-4 / sm:px-12 / md:flex md:justify-between md:gap-12 / lg:p-[120px] / xl:gap-4 xl:max-w-[1440px] xl:mx-auto xl:border-x-[0.4px] xl:border-neutrals-400">
        <h2 className="h h2 / mb-10 / xl:text-5xl">Fill in our form</h2>

        <form onSubmit={formik.handleSubmit} className="Form / w-full flex flex-col gap-4 / md:max-w-[588px]">

          {/* Name input */}
          <div className="relative">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              className={`Input / py-3 px-4 mb-1 bg-neutrals-400 border-[1px] rounded w-full font-paragraphs text-base leading-6 text-neutrals-1100 ${formik.touched.name == undefined ? "!border-neutrals-600" : ""} ${formik.touched.name && formik.errors.name ? "!border-error-500" : "border-success-500"} placeholder:text-neutrals-800 focus:border-neutrals-1100 focus-visible:border-neutrals-1100 focus-visible:outline-none / xl:text-xl xl:leading-7 xl:px-6 xl:py-4 xl:mb-2`}
            />

            <label
              htmlFor="name"
              className={`block text-left text-sm pb-2 ${formik.touched.name && formik.errors.name
                ? "text-error-500"
                : "hidden"
                }`}
            >
              {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
            </label>

            <FontAwesomeIcon icon={faTriangleExclamation} className={`text-error-500 absolute right-4 top-4 text-base leading-6 ${formik.touched.name == undefined ? "!hidden" : ""} ${formik.touched.name != undefined && formik.errors.name ? "" : "!hidden"} / xl:text-xl xl:top-5 xl:right-6`} />
            <FontAwesomeIcon icon={faCircleCheck} className={`text-success-500 absolute right-4 top-4 text-base leading-6 ${formik.touched.name == undefined ? "!hidden" : ""} ${formik.touched.name != undefined && formik.errors.name ? "!hidden" : "block"} / xl:text-xl xl:top-5 xl:right-6`} />
          </div>

          {/* Email input */}
          <div className="relative">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className={`Input / py-3 px-4 mb-1 bg-neutrals-400 border-[1px] rounded w-full font-paragraphs text-base leading-6 text-neutrals-1100 ${formik.touched.email == undefined ? "!border-neutrals-600" : ""} ${formik.touched.email && formik.errors.email ? "!border-error-500" : "border-success-500"} placeholder:text-neutrals-800 focus:border-neutrals-1100 focus-visible:border-neutrals-1100 focus-visible:outline-none / xl:text-xl xl:leading-7 xl:px-6 xl:py-4 xl:mb-2`}
            />

            <label
              htmlFor="email"
              className={`block text-left text-sm pb-2 ${formik.touched.email && formik.errors.email
                ? "text-error-500"
                : "hidden"
                }`}
            >
              {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
            </label>

            <FontAwesomeIcon icon={faTriangleExclamation} className={`text-error-500 absolute right-4 top-4 text-base leading-6 ${formik.touched.email == undefined ? "!hidden" : ""} ${formik.touched.email && formik.errors.email ? "" : "!hidden"} / xl:text-xl xl:top-5 xl:right-6`} />
            <FontAwesomeIcon icon={faCircleCheck} className={`text-success-500 absolute right-4 top-4 text-base leading-6 ${formik.touched.email == undefined ? "!hidden" : ""} ${formik.touched.email && formik.errors.email ? "!hidden" : "block"} / xl:text-xl xl:top-5 xl:right-6`} />
          </div>

          {/* Subject input */}
          <div className="relative">
            <input
              id="subject"
              type="text"
              name="subject"
              onChange={formik.handleChange}
              value={formik.values.subject}
              onBlur={formik.handleBlur}
              placeholder="Subject"
              className={`Input / py-3 px-4 mb-1 bg-neutrals-400 border-[1px] rounded w-full font-paragraphs text-base leading-6 text-neutrals-1100 ${formik.touched.subject == undefined ? "!border-neutrals-600" : ""} ${formik.touched.subject && formik.errors.subject ? "!border-error-500" : "border-success-500"} placeholder:text-neutrals-800 focus:border-neutrals-1100 focus-visible:border-neutrals-1100 focus-visible:outline-none / xl:text-xl xl:leading-7 xl:px-6 xl:py-4 xl:mb-2`}
            />

            <label
              htmlFor="subject"
              className={`block text-left text-sm pb-2 ${formik.touched.subject && formik.errors.subject
                ? "text-error-500"
                : "hidden"
                }`}
            >
              {formik.touched.subject && formik.errors.subject ? formik.errors.subject : ""}
            </label>

            <FontAwesomeIcon icon={faTriangleExclamation} className={`text-error-500 absolute right-4 top-4 text-base leading-6 ${formik.touched.subject == undefined ? "!hidden" : ""} ${formik.touched.subject && formik.errors.subject ? "" : "!hidden"} / xl:text-xl xl:top-5 xl:right-6`} />
            <FontAwesomeIcon icon={faCircleCheck} className={`text-success-500 absolute right-4 top-4 text-base leading-6 ${formik.touched.subject == undefined ? "!hidden" : ""} ${formik.touched.subject && formik.errors.subject ? "!hidden" : "block"} / xl:text-xl xl:top-5 xl:right-6`} />
          </div>

          {/* Textarea input */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              onBlur={formik.handleBlur}
              placeholder="Message"
              className={`Input / py-3 px-4 mb-1 bg-neutrals-400 border-[1px] rounded w-full font-paragraphs text-base leading-6 text-neutrals-1100 resize-none h-48 ${formik.touched.message == undefined ? "!border-neutrals-600" : ""} ${formik.touched.message && formik.errors.message ? "!border-error-500" : "border-success-500"} placeholder:text-neutrals-800 focus:border-neutrals-1100 focus-visible:border-neutrals-1100 focus-visible:outline-none / xl:text-xl xl:leading-7 xl:px-6 xl:py-4 xl:mb-2`}
            />

            <label
              htmlFor="message"
              className={`block text-left text-sm pb-2 ${formik.touched.message && formik.errors.message
                ? "text-error-500"
                : "hidden"
                }`}
            >
              {formik.touched.message && formik.errors.message ? formik.errors.message : ""}
            </label>

            <FontAwesomeIcon icon={faTriangleExclamation} className={`text-error-500 absolute right-4 top-4 text-base leading-6 ${formik.touched.message == undefined ? "!hidden" : ""} ${formik.touched.message && formik.errors.message ? "" : "!hidden"} / xl:text-xl xl:top-5 xl:right-6`} />
            <FontAwesomeIcon icon={faCircleCheck} className={`text-success-500 absolute right-4 top-4 text-base leading-6 ${formik.touched.message == undefined ? "!hidden" : ""} ${formik.touched.message && formik.errors.message ? "!hidden" : "block"} / xl:text-xl xl:top-5 xl:right-6`} />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            value="Submit"
            className="btn btn--primary / sm:w-min sm:whitespace-nowrap sm:px-10 / md:px-[100px]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}