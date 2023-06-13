import React from "react";
import Cards from "./Cards";

const RepoCards = ({ data, user }) => {
  return (
    <div class="w-md md:ml-20 ml-10 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 overflow-y-scroll">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-center text-gray-900 dark:text-white">
          Your repos
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          {user}
        </a>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          {data &&
            data.map((el) => {
              return (
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Repo name: {el.repo}
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Created at: {el.$createdAt.split("T")[0]}
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <a
                        href={el.link}
                        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          {!data.length && <Cards />}
        </ul>
      </div>
    </div>
  );
};

export default RepoCards;
