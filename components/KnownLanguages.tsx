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
import Card from "./Card";

const KnownLanguages = () => {
  return (
    <div className="pb-2 pt-2">
      <h4 className="font-BebasNeue">Known Languages</h4>
      <div className="flex justify-between pb-2 pt-2">
        <DiCss3 size={40} className="shadow-lg cursor-grab" />
        <DiHtml5 size={40} className="shadow-lg cursor-grab" />
        <DiJavascript1 size={40} className="shadow-lg cursor-grab hover:" />
        <DiPython size={40} className="shadow-lg cursor-grab" />
        <DiJava size={40} className="shadow-lg cursor-grab" />
      </div>
      <h4 className="font-BebasNeue text-right">
        Known Frameworks & Technologies
      </h4>
      <div className="flex justify-between pb-2 pt-2">
        <DiReact size={40} className="shadow-lg cursor-grab" />
        <DiGit size={40} className="shadow-lg cursor-grab" />
        <DiGithubBadge size={40} className="shadow-lg cursor-grab" />
      </div>

      <h4 className="font-BebasNeue">Projects</h4>
      <div className="flex justify-end">
        <Card
          link="jammil002.github.io/whattodoinphx/"
          title="What To Do In Phoenix"
          description="A collection of my favorite places across the valley."
        />
      </div>
    </div>
  );
};

export default KnownLanguages;
