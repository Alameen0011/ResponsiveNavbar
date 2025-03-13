import React from "react";

const Homepage = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-yellow-100">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
        {/*Left side writings */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-grey-900">
            Share Hair with Us
          </h1>
          <p className="text-lg text-gray-600">
            Join Our community and make an impact
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition">
            Get Started
          </button>
        </div>

        {/*Right side writings */}
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="Food donation"
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
