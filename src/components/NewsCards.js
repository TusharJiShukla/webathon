import React from "react";

const NewsCards = ({ image, key, desc }) => {
  return (
    <div className="ml-[20px] mr-[20px]">
      <div className="w-[300px] h-[300px] bg-red-300 rounded-md">
        <div className="flex flex-col items-stretch gap-y-5 p-2 " >
        <img src={image} width={"500px"} height={"400px"} className="rounded-md" alt=""/>
        <p>{desc}</p>
        </div>
      </div>
     
    </div>
  );
};

export default NewsCards;
