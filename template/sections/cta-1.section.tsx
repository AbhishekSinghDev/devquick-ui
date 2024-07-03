import React from "react";

const CtaOne = () => {
  return (
    <section className="w-full flex bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center space-y-5">
          <h2 className="text-base font-semibold text-pink-400 tracking-wide uppercase">
            Get started now
          </h2>
          <div className="inline-flex items-end justify-center w-full text-center mx-auto">
            <img
              src="https://randomuser.me/api/portraits/men/47.jpg"
              className="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/men/49.jpg"
              className="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/women/46.jpg"
              className="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/men/48.jpg"
              className="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/women/43.jpg"
              className="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative"
            />
          </div>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Discover your potential
            <span className="px-2 py-1 relative inline-block">
              <svg
                className="stroke-current bottom-0 absolute text-rose-300 -translate-x-2"
                viewBox="0 0 410 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                  stroke-width="12"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span className="relative">with us</span>
            </span>
          </p>

          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
            Sign up now and experience the difference in just one week
          </p>

          <div className="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0 sm:space-x-2.5 items-center justify-center">
            <a href="#" className="w-full sm:w-auto">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 w-full  shadow-sm font-medium rounded-full border border-rose-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-200 transition duration-250 ease-in-out"
              >
                <span className="text-base">Sign up with Email</span>
              </button>
            </a>

            <a href="#" className="w-full sm:w-auto sm:mt-0 mt-2 sm:ml-0 ml-2">
              <button
                type="button"
                className="flex items-center justify-center gap-4 px-4 py-3 w-full border border-rose-400 shadow-sm font-medium rounded-full  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-200 transition duration-250 ease-in-out"
              >
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                >
                  <g
                    id="Icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        ></path>
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="text-base">Sign up with Google</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaOne;
