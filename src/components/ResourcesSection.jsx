import React from "react";

const resources = [
  { title: "React Official Docs", link: "https://reactjs.org/" },
  { title: "Learn React on YouTube", link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8" },
];

const ResourcesSection = () => {
  return (
    <div>
      <h2>Useful Resources</h2>
      <ul>
        {resources.map((res, index) => (
          <li key={index}>
            <a href={res.link} target="_blank" rel="noopener noreferrer">
              {res.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourcesSection;
