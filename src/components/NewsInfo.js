import React from "react";
import NewsCards from "./NewsCards"; // Make sure NewsCards is imported correctly

const NewsInfo = () => {
  const arr = [
    {
      id: 1,
      image:
        "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/unnamed.jpg",
      desc: "Vendhar Museum – Makers of the Modern World opens in SRM",
    },
    {
      id: 2,
      image:
        "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/10/DSC_4848-1024x650.jpg",
      desc: "SRMIST Honored with Prestigious QS I-Gauge Platinum Rating for Excellence",
    },
    {
      id: 3,
      image:
        "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/10/lamp-lighting-ceremony-6-1.jpg",
      desc: "Vendhar Museum – Makers of the Modern World opens in SRM",
    },
    {
      id: 4,
      image:
        "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/05/201-scaled-e1715081111186.jpg",
      desc: "Sailing Beyond Seas: Nethra Kumanans Journey to Paris Olympic Glory",
    },
    {
      id: 5,
      image:
        "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/unnamed.jpg",
      desc: "Vendhar Museum – Makers of the Modern World opens in SRM",
    },
    {
        id: 6,
        image:
          "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/unnamed.jpg",
        desc: "Vendhar Museum – Makers of the Modern World opens in SRM",
      },
  ];

  return (
    <div className="h-[130vh] w-[100vw] bg-blue-400 flex flex-col justify-center ">
      <div className="flex flex-col gap-y-5">
        <h2 className="text-4xl text-neutral-800 text-center mt-10">
          Stay Updated with the Latest News
        </h2>
        <div className="mx-auto bg-red-800 w-[600px] h-1"></div>
        <div className="flex flex-wrap gap-x-20 gap-y-20 justify-around">
          {arr.map((p) => (
            <NewsCards image={p.image} key={p.id} desc={p.desc}></NewsCards>
          ))}
        </div>
        <div className="text-3xl ">
          <button className="bg-red-500 p-3 rounded-md m-10">Explore IIITV</button>
        </div>
      </div>
    </div>
  );
};

export default NewsInfo;
