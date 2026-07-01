import React from "react";
import { CATEGORY_IMAGES } from "../../common/Data";

export default function Category() {
  return (
    <React.Fragment>
      <h1 className="text-3xl font-bold text-(--primary-plum) my-5">Shop by Categories</h1>
      <div className="flex gap-4">
        {CATEGORY_IMAGES.map((category, index) => (
          <div
            key={index}
            className="group shadow-md hover:-translate-y-1 transition duration-300 cursor-pointer relative bg-(--primary-white) flex flex-col justify-center items-center gap-4 rounded-lg w-full pt-9 px-4 pb-3"
          >
            <img
              src={category.image}
              alt={category.name}
              className="block mx-auto group-hover:scale-105 transition duration-300 w-48 h-48"
            />

            <h2 className="text-(--primary-plum) text-lg text-center font-bold">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
