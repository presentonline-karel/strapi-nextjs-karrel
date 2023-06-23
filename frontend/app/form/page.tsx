"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

// Types
import { Request } from "@/types/Request";

export default function Home() {
  const router = useRouter();

  // Submit request values function
  async function handleRequestSubmit(values: Request) {

  }

  // Form validation + function
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      //router.push({ pathname: "/success", query: values });

      handleRequestSubmit(values);
    },
  });

  return (
    <div className="absolute w-full">
      <main className="h-screen items-center flex justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex rounded-lg font-latoRegular"
        >
          <div className="text-gray-700">
            <h1 className="text-3xl pb-2 font-latoBold">
              Let's get started 👋
            </h1>
            <p className="text-lg  text-gray-500">
              Join our E-learning platform today and unlock over 500+ courses
              and digital assets ready to download.
            </p>
            <div className="mt-6 ">

              {/* Name input field */}
              <div className="pb-4">
                <label
                  htmlFor="name"
                  className={`block font-latoBold text-sm pb-2 ${formik.touched.name && formik.errors.name
                    ? "text-red-400"
                    : ""
                    } `}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  className="w-full border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500 "
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
              </div>

              {/* Email input field */}
              <div className="pb-4">
                <label
                  htmlFor="email"
                  className={`block font-latoBold text-sm pb-2 ${formik.touched.email && formik.errors.email
                    ? "text-red-400"
                    : ""
                    }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  className="w-full border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
              >
                Start learning today!
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}