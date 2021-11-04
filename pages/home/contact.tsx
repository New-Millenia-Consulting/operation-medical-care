import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { MailIcon, PhoneIcon, MapIcon } from "@heroicons/react/outline";

import { useForm } from "react-hook-form";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Contact = () => {
  const formRef = useRef();
  const successTimeoutRef = useRef<NodeJS.Timeout | null>();

  const [submitBtnState, setSubmitBtnState] = useState<"idle" | "waiting">(
    "idle"
  );
  const [isSubmitSuccessShowing, setIsSubmitSuccessShowing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    return () => clearTimeout(successTimeoutRef.current);
  }, []);

  const onSubmit = (data) => {
    console.log(data, errors);
    setSubmitBtnState("waiting");

    const formData = new FormData(formRef.current);
    formData.append("viaJs", "true");

    fetch("/api/contact", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        reset();
        setSubmitBtnState("idle");

        setIsSubmitSuccessShowing(true);

        successTimeoutRef.current = setTimeout(() => {
          setIsSubmitSuccessShowing(false);
        }, 3000);
      })
      .catch((err) => {
        alert(`Something went wrong: ${err}`);
        setSubmitBtnState("idle");
      });
  };

  return (
    <>
      <div className="relative bg-mainGreen">
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="px-4 py-16 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="flex flex-col items-center max-w-lg mx-auto md:items-start">
              <h2
                className="text-2xl font-extrabold tracking-tight text-center text-green-900 sm:text-3xl md:text-left"
              >
                Get in touch
              </h2>
              <p className="mt-3 text-lg leading-6 text-center text-green-700 md:text-left">
                Looking to donate? Volunteer? Want to learn more about us? Leave
                us a message or call! Operation Medical Care is a 501c3
                nonprofit.
              </p>
              <dl className="mt-4 text-base text-green-700">
                <div className="mt-3 group">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 w-6 h-6 text-green-700 transition group-hover:text-primary-500"
                      aria-hidden="true"
                    />
                    <Link href="mailto:operationmedicalcare@gmail.com">
                      <a className="ml-3 transition group-hover:text-primary-500 group-hover:cursor-pointer">
                        operationmedicalcare@gmail.com
                      </a>
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="px-4 py-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                ref={formRef}
                action="/api/contact"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
                name="contact"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label htmlFor="name" className="sr-only">
                    Full name or Organization
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className={`
                    block w-full px-4 py-3 
                    placeholder-gray-500 transition border-gray-300 rounded-md shadow-sm
                    focus:ring-primary-500 focus:border-primary-500
                  
                    ${
                      errors.name?.type === "required"
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "focus:ring-primary-500 focus:border-primary-500"
                    }
                  `}
                    placeholder="Full name or organization"
                    required
                    {...register("name", { required: true })}
                  />
                  <div className="flex items-center px-4">
                    <label
                      className={`
                    absolute text-sm text-red-500 transform transition-all
                    ${
                      errors.name?.type === "required"
                        ? "translate-y-2.5 opactiy-100"
                        : "translate-y-0 opacity-0"
                    }
                  `}
                    >
                      Name or organization required
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full px-4 py-3 placeholder-gray-500 transition border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Email"
                    {...register("email", {
                      pattern: EMAIL_REGEX,
                    })}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    autoComplete="tel"
                    className="block w-full px-4 py-3 placeholder-gray-500 transition border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Message Subject"
                    {...register("subject")}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full px-4 py-3 placeholder-gray-500 transition border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Message"
                    defaultValue={""}
                    required
                    {...register("message", { required: true })}
                  />
                  <div className="flex items-center px-4">
                    <label
                      className={`
                    absolute text-sm text-red-500 transform transition-all
                    ${
                      errors.message?.type === "required"
                        ? "translate-y-2.5 opactiy-100"
                        : "translate-y-0 opacity-0"
                    }
                  `}
                    >
                      Message required
                    </label>
                  </div>
                </div>
                <div className="flex justify-center w-full mb-8 lg:justify-start lg:mb-0">
                  <button
                    type="submit"
                    className={`btn-main relative w-24 h-12 grid place-items-center shadow overflow-hidden ${
                      submitBtnState === "waiting" ? "shadow-none" : "shadow"
                    }`}
                    disabled={submitBtnState === "waiting"}
                  >
                    <span
                      className={`absolute transition-transform transform ${
                        submitBtnState !== "waiting" ? "-translate-y-10" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5 -ml-1 text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </span>
                    <span
                      className={`absolute transition-transform transform ${
                        submitBtnState === "waiting" ? "translate-y-10" : ""
                      }`}
                    >
                      Submit
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-live="assertive"
        className="fixed inset-0 z-50 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="flex flex-col items-center w-full space-y-4 sm:items-end">
          <Transition
            show={isSubmitSuccessShowing}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="w-6 h-6 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      Message sent successfully!
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 ml-4">
                    <button
                      className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setIsSubmitSuccessShowing(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default Contact;
