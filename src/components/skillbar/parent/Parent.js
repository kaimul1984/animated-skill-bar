import React from "react";
import Child from "../child/Child";
import "./parent.scss";
import items from "../skillBardata";
const Parent = () => {
  return (
    <div className="container">
      {items.map((item) => {
        return (
          <Child
            key={item.id}
            icon={item.icon}
            skill={item.skill}
            percentage={item.percentage}
          />
        );
      })}
    </div>
  );
};

export default Parent;
