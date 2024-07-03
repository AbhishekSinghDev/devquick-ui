import React from "react";

const ServicesOne = () => {
  return (
    <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            Boost Your Productivity{" "}
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
            Enhance your workflow with advanced features
          </p>
        </div>
        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
              <i className="fa-solid fa-chart-column text-3xl text-gray-900"></i>
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Advanced Analytics
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Track and analyze your data with powerful analytics tools. Gain
              valuable insights for better decision-making.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
              <i className="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Fast Integration
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Seamlessly integrate with your existing tools and systems for a
              smooth workflow experience.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
              <i className="fa-solid fa-shield text-3xl text-gray-900"></i>
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Security First
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Ensure the safety of your data with top-notch security features.
              Your privacy is our priority.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
              <i className="fa-solid fa-cloud text-3xl text-gray-900"></i>
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Cloud Integration
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Access your data from anywhere with seamless cloud integration.
              Work without boundaries.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
              <i className="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Task Management
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Organize your workflow with efficient task management features.
              Stay on top of your projects effortlessly.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
              <i className="fa-solid fa-bolt text-3xl text-gray-900"></i>
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Performance Metrics
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Monitor and measure your performance with comprehensive metrics.
              Optimize your processes for maximum efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOne;
