import {
  image1,
  image2,
  image3,
  mediumImg,
  payment,
  reviewer1,
  reviewer2,
} from "../utils/image";

const reviewData = [
  {
    comment: `Are you looking for a simple invoicing solution? Try Main Page today and you won't 
			be disappointed! Really nice UI. Great job 🤗`,
    name: "John Doe",
    position: "Previous Client",
    image: reviewer1,
  },
  {
    comment:
      "Great product, great support, very reactive. A real pleasure to use it, smooth and well designed.",
    name: "Johnny Doland",
    position: "Previous Client",
    image: reviewer2,
  },
];

const featureData = [
  {
    imagesrc: image1,
    text: {
      subtitle: "Easier for you.",
      heading: `Send your next invoice in under 5 seconds.`,
      description: `Spend more time doing the work you want to be doing. Main Page satisfies 
      the needs of independent contractors by providing quick, easy, and secure billing.`,
    },
    flipped: false,
  },
  {
    imagesrc: image2,
    text: {
      subtitle: "Built by freelancers",
      heading: `You get peace of mind`,
      description: `The all new Main Page is an invoicing tool built by people who use it. 
      Everything is kept organised. Your customers will receive automatic reminders to make timely payments.`,
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
      subtitle: "Easier for clients",
      heading: `Accept payments how you want to`,
      description: `Improve the transaction for you and your clients with secure payments & transparent fees. 
      Main Page accepts all major credit cards.`,
    },
    flipped: false,
    subComponentProps: {
      text: "Accept payments how you want to",
      linkText: `Try 30 days for free!`,
      imgsrc: payment,
    },
  },
];

const headlineData = {
  head1: "Super Fast Professional Invoicing for Freelancers",
  head2: `Main Page helps you send your invoices as quickly as possible, getting
  you paid faster.`,
  head3: `Try out our services for free for the first purchase!`,
  buttonText: `Get started for free`,
};

const pricingBannerData = [
  {
    heading: `Affordable pricing for everone.`,
    description: `Very simple pricing, one plan for a monthly fee. Unlimited
    everything, go wild, invoice to your hearts content.`,
    checkText1: "Free for 30 days",
    checkText2: "No credit card required!",
  },
  {
    currency: "$",
    price: "12",
    frequency: "per month",
    description: `Completely free for 30 days, unlimited everything so you can truely
    work out if Main Page is right for you.`,
    buttonText: "Start your 30 day free trial!",
  },
];

const pageData = ["Product", "Pricing", "Login"];

export { headlineData, reviewData, featureData, pricingBannerData, pageData };
