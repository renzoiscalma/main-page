import { image1, image2, image3, mediumImg, payment } from "../utils/image";

const reviewData = [
  {
    comment: `Are you looking for a simple invoicing solution? Try @twocardsco today and you won't 
			be disappointed! Really nice UI. Great job 🤗`,
    name: "John Doe",
    position: "Full Stack Developer",
    image: "review1.jpg",
  },
  {
    comment:
      "Try @twocardsco today and you won't be disappointed! Really nice UI. Great job 🤗",
    name: "Johnny Doland",
    position: "Lead Developer",
    image: "review1.jpg",
  },
];

const featureData = [
  {
    imagesrc: image1,
    text: {
      subtitle: "Easier for you.",
      heading: `Spend less than 5 seconds sending your next invoice`,
      description: `Spend more time doing the work you want to be doing. TwoCards meets
			the needs of freelancers, making invoicing swift, simple and secure.`,
    },
    flipped: false,
  },
  {
    imagesrc: image2,
    text: {
      subtitle: "Easier for you.",
      heading: `Spend less than 5 seconds sending your next invoice`,
      description: `Spend more time doing the work you want to be doing. TwoCards meets
			the needs of freelancers, making invoicing swift, simple and secure.`,
    },
    flipped: true,
    subComponentProps: {
      text: "A bit more insight",
      linkText: "Our 2 year long side project",
      imgsrc: mediumImg,
    },
  },
  {
    imagesrc: image3,
    text: {
      subtitle: "Easier for you.",
      heading: `Spend less than 5 seconds sending your next invoice`,
      description: `Spend more time doing the work you want to be doing. TwoCards meets
			the needs of freelancers, making invoicing swift, simple and secure.`,
    },
    flipped: false,
    subComponentProps: {
      text: "Accept payments how you want to",
      linkText: `Try 30 days for free!`,
      imgsrc: payment,
    },
  },
];

export { reviewData, featureData };
