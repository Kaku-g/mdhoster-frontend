import React from "react";

const Input = ({ handleRepoInput, handlePathInput, saveRepoData }) => {
  return (
    <div>
      <div className=" ml-5 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Create webpage from your repo!
          </h5>
          <div>
            <label
              for="repo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Repo Name
            </label>
            <input
              onChange={handleRepoInput}
              type="text"
              name="repo"
              id="repo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="path"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              README file
            </label>
            <input
              onChange={handlePathInput}
              type="text"
              name="path"
              id="path"
              placeholder="complete path from root "
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button
            onClick={saveRepoData}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div> */}
        </form>
      </div>
    </div>
  );
};

export default Input;
