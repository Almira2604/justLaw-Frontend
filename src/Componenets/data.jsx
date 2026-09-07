import criminal from '../assets/categories/criminal.jpg';
import admin from '../assets/categories/admin.jpg';
import constitutional from '../assets/categories/constitutional.jpg';
import contract from '../assets/categories/contract.jpg';
import corporate from '../assets/categories/corporate.jpg';
import envio from '../assets/categories/envio.jpg';
import family from '../assets/categories/family.jpg';
import intel from '../assets/categories/intel.jpg'; // Verified matching name
import property from '../assets/categories/property.jpg';
import tax from '../assets/categories/tax.jpg';

// ADMIN
import admin1 from '../assets/Images/admin1.jpg';
import admin2 from '../assets/Images/admin2.jpg';
import admin3 from '../assets/Images/admin3.jpg';
import admin4 from '../assets/Images/admin4.jpg';
import admin5 from '../assets/Images/admin5.jpg';


// CONSTITUTIONAL
import constitutional1 from '../assets/Images/constitutional1.jpg';
import constitutional2 from '../assets/Images/constitutional2.jpg';
import constitutional3 from '../assets/Images/constitutional3.jpg';
import constitutional4 from '../assets/Images/constitutional4.jpg';
import constitutional5 from '../assets/Images/constitutional5.jpg';

// CONTRACT
import contract1 from '../assets/Images/contract1.jpg';
import contract2 from '../assets/Images/contract2.jpg';
import contract3 from '../assets/Images/contract3.jpg';
import contract4 from '../assets/Images/contract4.jpg';
import contract5 from '../assets/Images/contract5.jpg';

// CORPORATE
import corporate1 from '../assets/Images/corporate1.jpg';
import corporate2 from '../assets/Images/corporate2.jpg';
import corporate3 from '../assets/Images/corporate3.jpg';
import corporate4 from '../assets/Images/corporate4.jpg';
import corporate5 from '../assets/Images/corporate5.jpg';

// CRIMINAL
import criminal1 from '../assets/Images/criminal1.jpg';
import criminal2 from '../assets/Images/criminal2.jpg';
import criminal3 from '../assets/Images/criminal3.jpg';
import criminal4 from '../assets/Images/criminal4.jpg';
import criminal5 from '../assets/Images/criminal5.jpg';

// ENVIRONMENTAL
import envio1 from '../assets/Images/envio1.jpg';
import envio2 from '../assets/Images/envio2.jpg';
import envio3 from '../assets/Images/envio3.jpg';
import envio4 from '../assets/Images/envio4.jpg';
import envio5 from '../assets/Images/envio5.jpg';

// FAMILY
import family1 from '../assets/Images/family1.jpg';
import family2 from '../assets/Images/family2.jpg';
import family3 from '../assets/Images/family3.jpg';
import family4 from '../assets/Images/family4.jpg';
import family5 from '../assets/Images/family5.jpg';

// INTELLECTUAL PROPERTY
import inte1 from '../assets/Images/inte1.jpg';
import inte2 from '../assets/Images/inte2.jpg';
import inte3 from '../assets/Images/inte3.jpg';
import inte4 from '../assets/Images/inte4.jpg';
import inte5 from '../assets/Images/inte5.jpg';

// PROPERTY
import property1 from '../assets/Images/property1.jpg';
import property2 from '../assets/Images/property2.jpg';
import property3 from '../assets/Images/property3.jpg';
import property4 from '../assets/Images/property4.jpg';
import property5 from '../assets/Images/property5.jpg';

// TAX
import tax1 from '../assets/Images/tax1.jpg';
import tax2 from '../assets/Images/tax2.jpg';
import tax3 from '../assets/Images/tax3.jpg';
import tax4 from '../assets/Images/tax4.jpg';
import tax5 from '../assets/Images/tax5.jpg';


// CATEGORIES (Added explicit slug strings for easy React Router URL building)
export const categories = [
  { name: "Administrative law", slug: "administrative", image: admin },
  { name: "Constitutional law", slug: "constitutional", image: constitutional },
  { name: "Contract law", slug: "contract", image: contract },
  { name: "Corporate law", slug: "corporate", image: corporate },
  { name: "Criminal law", slug: "criminal", image: criminal },
  { name: "Environmental law", slug: "environmental", image: envio },
  { name: "Family law", slug: "family", image: family },
  { name: "Intellectual Property law", slug: "intellectual-property", image: intel },
  { name: "Property law", slug: "property", image: property },
  { name: "Tax law", slug: "tax", image: tax },
];

export const dummyBooks = [
  {
    _id: "1",
    name: "Administrative Law for Students",
    cover_image: admin1,
    author: "Almira",
    price: 12000,
    description: "Overview of administrative bodies and legal systems.",
    category: "Administrative law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "2",
    name: "Administrative law for students",
    cover_image: admin2,
    author: "Almira",
    price: 13000,
    description: "The book explains key concepts such as rule-making, adjudication, and judicial review in simple, accessible language",
    category: "Administrative law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "3",
    name: "Administrative law for students",
    cover_image: admin3,
    author: "Almira",
    price: 12500,
    description: "It is designed as a dummy text for study, practice, and layout purposes while reflecting standard administrative law themes.",
    category: "Administrative law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "4",
    name: "Administrative law for students",
    cover_image: admin4,
    author: "Almira",
    price: 22000,
    description: "Principles and Practice provides a clear and concise overview of how administrative bodies operate within the legal system.",
    category: "Administrative law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "5",
    name: "Administrative law for students",
    cover_image: admin5,
    author: "Almira",
    price: 12000,
    description: "Principles and Practice serves as a reliable placeholder textbook with realistic academic tone and content.",
    category: "Administrative law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "6",
    name: "Foundations and Principles",
    cover_image: constitutional1,
    author: "Almira",
    price: 12000,
    description: "Provides a clear introduction to the basic principles of constitutional law, including government structure, powers, and individual rights.",
    category: "Constitutional law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "7",
    name: "Understanding the Constitution",
    cover_image: constitutional2,
    author: "Almira",
    price: 12500,
    description: "Simplifies complex constitutional concepts for students, with practical examples of landmark cases.",
    category: "Constitutional law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "8",
    name: "Constitutional Law in Practice",
    cover_image: constitutional3,
    author: "Almira",
    price: 13500,
    description: "Focuses on real-life applications of constitutional law and its impact on modern governance.",
    category: "Constitutional law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "9",
    name: "Fundamentals of Constitutional Governance",
    cover_image: constitutional4,
    author: "Almira",
    price: 15000,
    description: "Covers essential topics like separation of powers, federalism, and the protection of civil liberties.",
    category: "Constitutional law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "10",
    name: "Case Studies in Constitutional Law",
    cover_image: constitutional5,
    author: "Almira",
    price: 14500,
    description: "Key constitutional cases and interpretations.",
    category: "Constitutional law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "11",
    name: "Essentials of Contract Law",
    cover_image: contract1,
    author: "Almira",
    price: 15000,
    description: "Covers the fundamentals of contracts, including offer, acceptance, and enforceability.",
    category: "Contract law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "12",
    name: "Contract Law in Practice",
    cover_image: contract2,
    author: "Almira",
    price: 15500,
    description: "Explains contract formation, breach, and remedies with real-world examples.",
    category: "Contract law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "13",
    name: "Understanding Contractual Obligations",
    cover_image: contract3,
    author: "Almira",
    price: 15000,
    description: "Guides students through the key legal principles governing agreements and obligations.",
    category: "Contract law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "14",
    name: "Principles of Modern Contract Law",
    cover_image: contract4,
    author: "Almira",
    price: 15000,
    description: "Explores contemporary issues in contract law, including electronic contracts.",
    category: "Contract law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "15",
    name: "Case Study in Contract Law",
    cover_image: contract5,
    author: "Almira",
    price: 15000,
    description: "Landmark contract law cases.",
    category: "Contract law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "16",
    name: "Corporate law fundamentals",
    cover_image: corporate1,
    author: "Almira",
    price: 15000,
    description: "Introduces the structure, governance, and regulation of corporations.",
    category: "Corporate law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "17",
    name: "Corporate Governance and Compliance",
    cover_image: corporate2,
    author: "Almira",
    price: 15500,
    description: "Focuses on legal responsibilities of directors and corporate compliance requirements.",
    category: "Corporate law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "18",
    name: "Business Law Essentials",
    cover_image: corporate3,
    author: "Almira",
    price: 16000,
    description: " Covers the laws that govern businesses, mergers, and corporate finance.",
    category: "Corporate law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "19",
    name: "Corporate Law in Nigeria",
    cover_image: corporate4,
    author: "Almira",
    price: 17000,
    description: "Explains corporate legal frameworks specific to Nigerian law and practice.",
    category: "Corporate law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "20",
    name: "Case Studies in Corporate Law",
    cover_image: corporate5,
    author: "Almira",
    price: 15000,
    description: " Uses real corporate disputes to illustrate legal principles in action.",
    category: "Corporate law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "21",
    name: "Introduction to criminal law",
    cover_image: criminal1,
    author: "Almira",
    price: 20000,
    description: " Explains the basic principles of criminal responsibility and offenses.",
    category: "Criminal law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "22",
    name: "Principles and practice",
    cover_image: criminal2,
    author: "Almira",
    price: 20000,
    description: "Covers major criminal law concepts and procedures with examples.",
    category: "Criminal law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "23",
    name: "Understanding Criminal Offenses",
    cover_image: criminal3,
    author: "Almira",
    price: 20000,
    description: "Provides insight into classification, elements, and defenses in criminal law.",
    category: "Criminal law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "24",
    name: "Criminal law cases and analysis",
    cover_image: criminal4,
    author: "Almira",
    price: 20000,
    description: " Discusses landmark criminal cases and their impact on legal practice.",
    category: "Criminal law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "25",
    name: "Practical Law and Analysis",
    cover_image: criminal5,
    author: "Almira",
    price: 20000,
    description: "Application of criminal law in proceedings.",
    category: "Criminal law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "26",
    name: "Environmental Law Basics",
    cover_image: envio1,
    author: "Almira",
    price: 18000,
    description: "Introduces legal principles protecting the environment and natural",
    category: "Environmental law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "27",
    name: "Sustainable Development and the Law",
    cover_image: envio2,
    author: "Almira",
    price: 18000,
    description: "Covers regulations related to sustainability, pollution control, and conservation.",
    category: "Environmental law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "28",
    name: "Environmental Law in Practice",
    cover_image: envio3,
    author: "Almira",
    price: 18000,
    description: "Explains how environmental laws are enforced and applied in real cases.",
    category: "Environmental law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "29",
    name: "Case Studies in Environmental Law",
    cover_image: envio4,
    author: "Almira",
    price: 18000,
    description: "Uses landmark cases to illustrate environmental law enforcement and compliance.",
    category: "Environmental law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "30",
    name: "Principles of Environmental Governance",
    cover_image: envio5,
    author: "Almira",
    price: 18000,
    description: "Discusses international and national laws aimed at preserving ecosystems and resources.",
    category: "Environmental law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "31",
    name: "Foundation of Family Law",
    cover_image: family1,
    author: "Almira",
    price: 18000,
    description: "Introduces the principles governing marriage, divorce, and child custody.",
    category: "Family law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "32",
    name: "Understanding Marital Rights",
    cover_image: family2,
    author: "Almira",
    price: 18500,
    description: "Explains legal rights and obligations of spouses and family members.",
    category: "Family law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "33",
    name: "Case Studies in Family Law",
    cover_image: family3,
    author: "Almira",
    price: 19000,
    description: "Uses real-life cases to illustrate family law disputes and resolutions.",
    category: "Family law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "34",
    name: "Family Law in Practice",
    cover_image: family4,
    author: "Almira",
    price: 20000,
    description: "Covers practical aspects of family law, including adoption and domestic relations.",
    category: "Family law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "35",
    name: "Contemporary Issues in Family Law",
    cover_image: family5,
    author: "Almira",
    price: 11000,
    description: "Discusses emerging issues such as domestic violence and guardianship.",
    category: "Family law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "36",
    name: "Introduction to Intellectual Property Law",
    cover_image: inte1,
    author: "Almira",
    price: 10000,
    description: "Covers the basics of patents, copyrights, trademarks, and trade secrets.",
    category: "Intellectual Property law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "37",
    name: "IP Law in Practice",
    cover_image: inte2,
    author: "Almira",
    price: 15000,
    description: "Explains how intellectual property rights are enforced and protected.",
    category: "Intellectual Property law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "38",
    name: "Understanding Copyright and Patents",
    cover_image: inte3,
    author: "Almira",
    price: 10600,
    description: "Focuses on legal principles governing creative works and inventions..",
    category: "Intellectual Property law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "39",
    name: "Case Studies in Intellectual Property",
    cover_image: inte4,
    author: "Almira",
    price: 10000,
    description: "Examines landmark IP cases and their impact on the law.",
    category: "Intellectual Property law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "40",
    name: "Contemporary Issues in IP Law",
    cover_image: inte5,
    author: "Almira",
    price: 17000,
    description: "Discusses challenges like digital piracy and technology-related IP disputes.",
    category: "Intellectual Property law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "41",
    name: "Principles of Property Law",
    cover_image: property1,
    author: "Almira",
    price: 17500,
    description: "Explains ownership, possession, and transfer of property.",
    category: "Property law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "42",
    name: "Property Law and Practice",
    cover_image: property2,
    author: "Almira",
    price: 14000,
    description: "Covers land law, leases, mortgages, and property disputes.",
    category: "Property law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "43",
    name: "Understanding Real and Personal Property",
    cover_image: property3,
    author: "Almira",
    price: 18000,
    description: "Guides students through legal distinctions and rights relating to property.",
    category: "Property law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "44",
    name: "Case Studies in Property Law",
    cover_image: property4,
    author: "Almira",
    price: 19000,
    description: "Uses landmark property cases to illustrate legal principles.",
    category: "Property law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "45",
    name: "Modern Property Law",
    cover_image: property5,
    author: "Almira",
    price: 18500,
    description: "Discusses contemporary issues like zoning, land use, and property regulation.",
    category: "Property law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "46",
    name: "Introduction to Tax Law",
    cover_image: tax1,
    author: "Almira",
    price: 17500,
    description: "Overview of taxation principles.",
    category: "Tax law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "47",
    name: "Tax Law in Practice",
    cover_image: tax2,
    author: "Almira",
    price: 15000,
    description: "Explains tax obligations, compliance, and enforcement procedures.",
    category: "Tax law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "48",
    name: "Corporate and Personal Taxation",
    cover_image: tax3,
    author: "Almira",
    price: 17500,
    description: "Covers the laws governing corporate and individual tax responsibilities.",
    category: "Tax law",
    date: Date.now(),
    popular: false,
    inStock: true,
  },
  {
    _id: "49",
    name: "Case Studies in Tax Law",
    cover_image: tax4,
    author: "Almira",
    price: 18500,
    description: "Uses real-life examples to explain tax disputes and resolutions.",
    category: "Tax law",
    date: Date.now(),
    popular: true,
    inStock: true,
  },
  {
    _id: "50",
    name: "Contemporary Tax Law Issues",
    cover_image: tax5,
    author: "Almira",
    price: 20000,
    description: "Discusses recent reforms, international taxation, and policy challenges.",
    category: "Tax law",
    date: Date.now(),
    popular: false,
    inStock: true,
  }
]; 
