import Link from "next/link";

import { MailIcon, PhoneIcon, MapIcon } from "@heroicons/react/outline";

import { useForm } from "react-hook-form";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data, errors);

  return (
    <div className="relative bg-blue-gray-50">
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="px-4 py-16 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="flex flex-col items-center max-w-lg mx-auto md:items-start">
            <h2
              className="text-2xl font-extrabold tracking-tight text-center text-gray-900 sm:text-3xl md:text-left"
              id="contact"
            >
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-center text-gray-500 md:text-left">
              Looking to donate? Volunteer? Want to learn more about us? Leave
              us a message or call! Operation Medical Care is a 501c3 nonprofit.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div className="">
                <dt className="sr-only">Postal address</dt>
                <dd className="flex">
                  <MapIcon
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition group-hover:text-primary-500"
                    aria-hidden="true"
                  />
                  <div className="ml-3">
                    <p>332 Medcrest Dr</p>
                    <p>Crestview, FL 32536</p>
                  </div>
                </dd>
              </div>
              <div className="mt-6 group">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition group-hover:text-primary-500"
                    aria-hidden="true"
                  />
                  <Link href="tel:850-974-7400">
                    <span className="ml-3 transition group-hover:text-primary-500 group-hover:cursor-pointer">
                      +1 (850) 974-7400
                    </span>
                  </Link>
                </dd>
              </div>
              <div className="mt-3 group">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition group-hover:text-primary-500"
                    aria-hidden="true"
                  />
                  <Link href="mailto:operationmedicalcare@gmail.com">
                    <span className="ml-3 transition group-hover:text-primary-500 group-hover:cursor-pointer">
                      operationmedicalcare@gmail.com
                    </span>
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="px-4 py-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              method="POST"
              className="grid grid-cols-1 gap-y-6"
              name="contact"
              data-netlify="true"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="full_name" className="sr-only">
                  Full name or Organization
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autoComplete="name"
                  className={`
                    block w-full px-4 py-3 
                    placeholder-gray-500 transition border-gray-300 rounded-md shadow-sm
                    focus:ring-primary-500 focus:border-primary-500
                  
                    ${
                      errors.fullName?.type === "required"
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "focus:ring-primary-500 focus:border-primary-500"
                    }
                  `}
                  placeholder="Full name or organization"
                  required
                  {...register("fullName", { required: true })}
                />
                <div className="flex items-center px-4">
                  <label
                    className={`
                    absolute text-sm text-red-500 transform transition-all
                    ${
                      errors.fullName?.type === "required"
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
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full px-4 py-3 placeholder-gray-500 transition border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Phone"
                  {...register("phoneNumber")}
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
                <button type="submit" className="px-6 py-3 shadow btn-main">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
