import React from "react";
import CarouselSection from "./CarouselSection";
import { AMENITIES, CAROUSEL_SLIDES } from "../../common/Data";
import IconComponent from "../../components/IconComponent";
import Category from "./Category";

export default function Home() {
  return (
    <React.Fragment>
      <div className="bg-(--opacity-light-pink-40) z-0">
        <CarouselSection slides={CAROUSEL_SLIDES} />
      </div>
      <section className="bg-(--primary-light-pink) border-y border-(--opacity-soft-pink-10) py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES.map(({ icon: Icon, name, description }) => (
              <div key={name} className="flex items-center gap-4">
                <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <IconComponent
                    name={Icon}
                    className="w-5 h-5 text-(--primary-soft-pink)"
                  />
                </div>
                <div>
                  <p className="font-semibold text-(--primary-plum) text-sm">
                    {name}
                  </p>
                  <p className="text-xs text-(--primary-mauve)">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-350 mx-auto py-4">
        <Category />
      </div>

      {/* <div className="max-w-350 mx-auto py-4">
        <Category />
      </div> */}
    </React.Fragment>
  );
}
