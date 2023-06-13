import React from "react";

const LoadingIcon = () => {
  return (
    <div className=" justify-center md:justify-start flex w-full max-w-sm p-4">
      <svg
        className="animate-bounce h-2 w-2 mr-3 bg-gray-500 rounded-2xl mt-4 ml-4"
        viewBox="0 0 24 24"
      ></svg>
      <svg
        className="animate-bounce h-2 w-2 mr-3 bg-gray-500 rounded-2xl mt-4 ml-4"
        viewBox="0 0 24 24"
      ></svg>
      <svg
        className="animate-bounce h-2 w-2 mr-3 bg-gray-500 rounded-2xl mt-4 ml-4"
        viewBox="0 0 24 24"
      ></svg>
    </div>
  );
};

export default LoadingIcon;
