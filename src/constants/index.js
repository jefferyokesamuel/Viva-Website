import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  linkedin,
} from "../assets";

import bitcoin from "../assets/bitcoin.png"
import eth from "../assets/eth.png"
import polygon from "../assets/polygon.png"
import ton from "../assets/ton.png"
import solana from "../assets/solana.png"

import shiga from "../assets/shiga.png"
import coino from "../assets/coino.png"
import greybox from "../assets/greybox.png"

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#features",
  },
  {
    id: "1",
    title: "Use Cases",
    url: "#roadmap",
  },
  {
    id: "2",
    title: "Our Process",
    url: "#collaboration",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [bitcoin, eth, polygon, ton, solana];

export const partners = [shiga, coino, greybox]



export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Game Character NFTs & Collectibles",
    text: "We help game studios and developers turn their characters into unique NFTs or digital collectibles. Our service enhances community engagement by allowing players to own, trade and collect exclusive in-game assets. We provide seamless integration of blockchain technology to bring your game characters to life as one-of-a-kind digital assets.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "1",
    title: "Crypto Integration for Casinos",
    text: "We specialize in helping online sports betting platforms and casinos integrate cryptocurrency support for user deposits. Our service enables seamless, secure, and fast crypto transactions, offering your users more flexibility and privacy while enhancing your platform’s appeal in the digital age",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
  },
  {
    id: "2",
    title: "Lead Generation",
    text: "We help Web3 and blockchain projects generate and convert leads. By leveraging targeted outreach and effective lead generation strategies, we ensure your innovative solutions connect with the right audience, driving engagement and fostering growth.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    colorful: true,
  },

];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Ideation",
    text: "In this phase, we explore the client's vision and identify potential use cases for blockchain technology, aligning the goals of the project with its intended impact.",
  },
  {
    id: "1",
    title: "Assessment",
    text: "We evaluate the feasibility of the proposed solution by analyzing the current infrastructure, project requirements, and potential challenges, ensuring blockchain is the right fit.",
  },
  {
    id: "2",
    title: "Technical Component Definition",
    text: "This involves defining the core technical elements of the project, such as the blockchain platform, consensus mechanisms, smart contracts, and any integrations needed.",
  },
];

export const collabContent2 = [
  {
    id: "0",
    title: "POC",
    text: "We create a small-scale prototype to test the concept in a real-world environment, validating the solution's functionality and its ability to meet business goals.",
  },
  {
    id: "1",
    title: "Integration",
    text: "The blockchain solution is integrated with existing systems, including APIs, databases, and external platforms, ensuring seamless functionality and interoperability.",
  },
  {
    id: "2",
    title: "Development",
    text: "In this final phase, we develop the full solution, including all components, ensuring security, scalability, and efficiency before deployment.",
  },
]

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Blockchain Legal Consulting",
    text: "We offer expert legal counseling to help you navigate the legal and regulatory challenges of blockchain and crypto assets. <br /> <br />From ICOs and decentralized apps to blockchain-based ETFs and other solutions, we ensure your operations are compliant and secure",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "NFT Project Launch",
    text: "Launch your NFT project with confidence and expertise. We provide end-to-end support, from ideation and design to development and marketplace strategy.<br /> <br />Whether you're creating collectible assets, digital art, or utility NFTs, our team ensures a successful launch",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Product Market Fit",
    text: "Achieving product-market fit is every project's goal. We make it easier by conducting in-depth research to align your product with market demand, refine your value proposition and optimize your user experience. <br /> <br />Our approach ensures that your blockchain/crypto project resonates with your target audience",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Lead Generation and Outreach",
    text: "Building the best Layer 2 solution or SaaS platform is one thing; getting users is another. We help you bridge that gap by connecting you with the right users through strategic lead generation and targeted outreach, ensuring your solution reaches its ideal audience and achieves growth.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Tokenomics",
    text: "Tokenomics is about more than numbers—it’s about community and lasting value. We design token models that drive engagement, reward loyalty, and support sustainable growth. <br /> <br />From governance to staking, our strategies align with your vision, creating real utility and a loyal user base.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "http://t.me/jefferyokesamuel",
  },
  {
    id: "4",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "#",
  },
];
