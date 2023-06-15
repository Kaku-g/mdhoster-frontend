import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { useParams } from "react-router-dom";
import rehypeHighlight from "rehype-highlight";

const MarkdownPage = () => {
  const [data, setData] = useState();

  const params = useParams();
  //var content;

  useEffect(() => {
    const getData = async () => {
      axios
        .get(
          `https://mdhoster-backend.onrender.com/user/${params.user}/${params.repo}`
        )
        .then((response) => {
          //console.log(response);

          setData(response.data.code);
        });
    };
    getData();
    // if (repo && user) {
    //   getData();
    // }
  }, []);

  return (
    <div className="mx-5 bg-gray-900 text-white">
      {data && (
        <div className="flex flex-col justify-center items-center prose px-5 py-5">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {data}
          </ReactMarkdown>
        </div>
      )}
      {!data && (
        <div className="flex justify-center items-center">
          <h2 className="text-center">Loading............</h2>
        </div>
      )}
    </div>
  );
};

export default MarkdownPage;
