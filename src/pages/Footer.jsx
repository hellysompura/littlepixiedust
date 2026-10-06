import React from "react";
import { FOOTER_CATEGORIES, HEADER_CATEGORIES } from "../common/Data";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="w-full bg-(--primary-dark-purple) h-auto py-8 px-4">
        <ul className="container mx-auto grid grid-cols-12 gap-4">
          <li className="col-span-3">
            {/* <img src="" alt="" /> */}
            <p className="text-(--primary-white)">
              Thoughtfully designed children's clothing made to survive every
              adventure with a smile.
            </p>
          </li>
          <li className="col-span-3">
            <h3 className="text-(--primary-white) text-base font-semibold mb-2">Shop</h3>
            <ul>
              {HEADER_CATEGORIES.map((category) => (
                <li
                  key={category.name}
                  className="cursor-pointer group px-3 py-2 transition-colors rounded-full"
                >
                  <span className="text-(--primary-mauve) text-base font-semibold group-hover:text-(--primary-soft-pink)">
                    {category.name}
                  </span>
                </li>
              ))}
            </ul>
          </li>
          <li className="col-span-3">
           <h3 className="text-(--primary-white) text-base font-semibold mb-2">Help</h3>
            <ul>
              {FOOTER_CATEGORIES["Help"].subCategories.map((category) => (
                <li
                  key={category.name}
                  className="cursor-pointer group px-3 py-2 transition-colors rounded-full"
                >
                  <span className="text-(--primary-mauve) text-base font-semibold group-hover:text-(--primary-soft-pink)">
                    {category.name}
                  </span>
                </li>
              ))}
            </ul>
          </li>
          <li className="col-span-3">
            <h3 className="text-(--primary-white) text-base font-semibold mb-2">About Us</h3>
            <ul>
              {FOOTER_CATEGORIES["AboutUs"].subCategories.map((category) => (
                <li
                  key={category.name}
                  className="cursor-pointer group px-3 py-2 transition-colors rounded-full"
                >
                  <span className="text-(--primary-mauve) text-base font-semibold group-hover:text-(--primary-soft-pink)">
                    {category.name}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <hr className="border-(--opacity-white-20) my-4" />

        <div className="container mx-auto text-center text-(--opacity-white-90) grid grid-cols-12 gap-4">
          <p className="col-span-6 text-left">© 2025 Little Pixie Dust. All rights reserved.</p>
          <p className="col-span-6 text-right">Made with ❤️ by Little Pixie Dust</p>
        </div>
      </div>
    </React.Fragment>
  );
}
