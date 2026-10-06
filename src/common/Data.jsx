import Slider1 from "../assets/images/carousel/Slider-1.png";
import Slider2 from "../assets/images/carousel/Slider-2.png";
import Slider3 from "../assets/images/carousel/Slider-3.png";
import Slider4 from "../assets/images/carousel/Slider-4.png";
import Slider5 from "../assets/images/carousel/Slider-5.png";

import NewArrivals from "../assets/images/category/new-arrivals.png";
import Girls from "../assets/images/category/girls.png";
import Boys from "../assets/images/category/boys.png";
import Baby from "../assets/images/category/baby.png";
import Sale from "../assets/images/category/sale.png";

export const HEADER_CATEGORIES = [
  {
    name: "New Arrivals",
    icon: "NewArrivals",
  },
  {
    name: "Girls",
    icon: "Girls",
  },
  {
    name: "Boys",
    icon: "Boys",
  },
  {
    name: "Baby",
    icon: "Baby",
  },
  {
    name: "Sale",
    icon: "Sale",
  },
];

export const CAROUSEL_SLIDES = [
  {
    image: Slider1,
    title: "New Arrivals",
    description: "Fresh styles, just landed here, hurry up!",
  },
  {
    image: Slider2,
    title: "Girls",
    description: "Cute, comfy, and made for play",
  },
  {
    image: Slider3,
    title: "Boys",
    description: "Built for adventure, made to last",
  },
  {
    image: Slider4,
    title: "Baby",
    description: "Soft essentials for your little one",
  },
  {
    image: Slider5,
    title: "Sale",
    description: "Great styles, even better prices",
  },
];

export const AMENITIES = [
  {
    name: "Free Shipping",
    description: "On orders over $50",
    icon: "Van",
  },
  {
    name: "Easy Returns",
    description: "30-day free return policy",
    icon: "RefreshCw",
  },
  {
    name: "Safe Materials",
    description: "Non-toxic and eco-friendly",
    icon: "Shield",
  },
  {
    name: "Gift Wrapping",
    description: "Beautiful packaging for every occasion",
    icon: "Gift",
  },
];

export const CATEGORY_IMAGES = [
  {
    name: "New Arrivals",
    image: NewArrivals,
  },
  {
    name: "Girls",
    image: Girls,
  },
  {
    name: "Boys",
    image: Boys,
  },
  {
    name: "Baby",
    image: Baby,
  },
  {
    name: "Sale",
    image: Sale,
  },
];

export const FOOTER_CATEGORIES = {
  Help: {
    name: "Help",
    icon: "Help",

    subCategories: [
      {
        name: "Size Guide",
        icon: "SizeGuide",
      },
      {
        name: "Shipping Info",
        icon: "Shipping",
      },
      {
        name: "Returns",
        icon: "Returns",
      },
      {
        name: "Contact Us",
        icon: "ContactUs",
      },
    ],
  },
  AboutUs: {
    name: "About Us",
    icon: "AboutUs",

    subCategories: [
      {
        name: "Our Story",
        icon: "OurStory",
      },
      {
        name: "Careers",
        icon: "Careers",
      },
      {
        name: "Contact",
        icon: "Contact",
      },
    ],
  },
};
