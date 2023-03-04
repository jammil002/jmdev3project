import React from "react";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiPython,
  DiReact,
  DiGit,
  DiGithubBadge,
  DiJava,
} from "react-icons/di";

const KnownLanguages = () => {
  return (
    <div className="pb-2 pt-2">
      <h4 className="font-BebasNeue">Known Languages</h4>
      <div className="flex justify-between pb-2 pt-2 ">
        <a href="">
          <DiCss3 size={35} />
        </a>
        <a href="">
          <DiHtml5 size={35} />
        </a>
        <a href="https://www.javascript.com/">
          <DiJavascript1 size={35} />
        </a>
        <a href="">
          <DiPython size={35} />
        </a>
        <a>
          <DiJava size={35} />
        </a>
      </div>
      <h4 className="font-BebasNeue text-right">
        Known Frameworks & Libraries
      </h4>
      <div className="flex justify-between pb-2 pt-2">
        <a href="">
          <DiReact size={35} />
        </a>
        <a href="">
          <DiGit size={35} />
        </a>
        <a>
          <DiGithubBadge size={35} />
        </a>
      </div>

      <h4 className="font-BebasNeue">Projects</h4>
    </div>
  );
};

export default KnownLanguages;
