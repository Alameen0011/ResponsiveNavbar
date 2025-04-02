import React from "react";

const GetInTouch = () => {
  return (
    <>
      <div className="min-h-screen bg-green-600 flex flex-col justify-center ">
        <div className=" bg-yellow-400  text-white  mx-auto min-w-80 min-h-120 flex flex-col items-center justify-center">
          <div className="bg-amber-900 ">
           <label htmlFor="name">Name</label>
           <input type="text" name="name" id="name" />
          </div>
          <div className="bg-purple-700">
           <label htmlFor="email">email</label>
           <input type="email" name="email" id="email" />
          </div>

        </div>
      </div>
    </>
  );
};

export default GetInTouch;
