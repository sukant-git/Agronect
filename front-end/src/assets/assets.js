import Header from "./header.jpg";
import add_green from "./add_icon_green.png";
import add_white from "./add_icon_white.png";
import app_store from "./app_store.png";
import bag_icon from "./bag_icon.png";
import basket_icon from "./basket_icon.png";
import cross_icon from "./cross_icon.png";
import facebook_icon from "./facebook_icon.png";
import linkedin_icon from "./linkedin_icon.png";
import logout_icon from "./logout_icon.png";
import menu_dairy from "./menu-dairy.jpg";
import menu_fruits from "./menu-frutis.jpg";
import menu_millets from "./menu-millets.jpg";
import menu_spice from "./menu-spice.jpg";
import menu_veg from "./menu-veg.jpeg";
import parcel_icon from "./parcel_icon.png";
import play_store from "./play_store.png";
import profile_icon from "./profile_icon.png";
import rating_stars from "./rating_starts.png";
import remove_icon_red from "./remove_icon_red.png";
import search_icon from "./search_icon.png";
import selector_icon from "./selector_icon.png";
import twitter_icon from "./twitter_icon.png";
import logo from "./logo1.png";
import tomatoImg from "./tomato (2).jpg";

import ches from "./chees.jpg";
import wheat from "./wheat.avif";


import Abio from './Abiotic Diseases.png';
import bacteria from './bacteria.png';
import Downy from './Downy.png';
import fungal from "./fungal.png"
import Leaf from './Leaf.png';
import nutrien from './nutrient.png';
import rootstem from './Root and stem Rot.png';
import pestA from './Pest Attack.png';
import seed from './Seed.png';









import B_leaf from './B_LEAF.jpeg';
import B_wilt from './B_WILT.jpeg';
import B_fire from './B_FIRE.jpeg';   
import B_spot from './B_SPOT.jpeg';
import soft_rot from './SOFT_ROT.jpeg';












import black from './BLACK_P.jpeg';
import rust from './RUST_P.jpeg'; 
import late from './LATE_P.jpeg';
import powdery from './POWDER_P.jpeg';
import downy from './DOWN_P.jpeg';

export const agri_ph = {
  Abio,
  bacteria,
  Downy,
  fungal,
  Leaf,
  nutrien,
  rootstem,
  pestA,
  seed
};

export const agri_List = [
  {
    agri_d: 'Fungal',
    agri_R: fungal
  },
  {
    agri_d: 'Bacteria',
    agri_R: bacteria
  },
  {
    agri_d: 'Abiotic',
    agri_R: Abio
  },
  {
    agri_d: 'Downy Mildew',
    agri_R: Downy
  },
  {
    agri_d: 'Leaf Miner',
    agri_R: Leaf
  },
  {
    agri_d: 'Nutrient Deficiency',
    agri_R: nutrien
  },
  {
    agri_d: 'Root and Stem Rot',
    agri_R: rootstem
  },
  {
    agri_d: 'Pest Attack',
    agri_R: pestA
  },
  {
    agri_d: 'Seed and Fruit Diseases',
    agri_R: seed
  }
];






  
  // export const agri_display = [
  //   // 🌿 Fungal
  //   {
  //     id: "1",
  //     name: "Powdery Mildew",
  //     image: fungal,
  //     category: "Fungal Diseases",
  //     biological_name: "Erysiphe cichoracearum",
  //     description: "A white, powdery fungus that affects leaves, stems, and flowers.",
  //     prevention: "Ensure good air circulation, avoid overhead watering, and plant resistant varieties.",
  //     pesticide: "Sulfur-based fungicide or neem oil",
  //     fertilizer: "Balanced NPK fertilizer (10-10-10)",
  //     fertilizer_link: "https://example.com/fertilizer1"
  //   },
  //   {
  //     id: "2",
  //     name: "Downy Mildew",
  //     image: fungal,
  //     category: "Fungal Diseases",
  //     biological_name: "Peronospora spp.",
  //     description: "Causes yellow to brown angular leaf spots with fuzzy growth underneath.",
  //     prevention: "Improve air flow, remove infected leaves, and use resistant varieties.",
  //     pesticide: "Copper-based fungicide",
  //     fertilizer: "Phosphorus-rich fertilizer",
  //     fertilizer_link: "https://example.com/fertilizer2"
  //   },
  
  //   // 🦠 Bacterial
  //   {
  //     id: "3",
  //     name: "Bacterial Leaf Spot",
  //     image: bacteria,
  //     category: "Bacterial Diseases",
  //     biological_name: "Xanthomonas campestris",
  //     description: "Causes water-soaked spots on leaves that turn brown or black.",
  //     prevention: "Avoid overhead watering and handle plants gently to prevent wounding.",
  //     pesticide: "Copper-based bactericide",
  //     fertilizer: "Organic compost or manure",
  //     fertilizer_link: "https://example.com/fertilizer3"
  //   },
  //   {
  //     id: "4",
  //     name: "Bacterial Wilt",
  //     image: bacteria,
  //     category: "Bacterial Diseases",
  //     biological_name: "Ralstonia solanacearum",
  //     description: "Sudden wilting of leaves with brown discoloration in vascular tissues.",
  //     prevention: "Crop rotation and resistant plant varieties.",
  //     pesticide: "Streptomycin sulfate (only under professional guidance)",
  //     fertilizer: "Nitrogen-rich fertilizer",
  //     fertilizer_link: "https://example.com/fertilizer4"
  //   },
  
  //   // 🌬️ Abiotic
  //   {
  //     id: "5",
  //     name: "Nutrient Deficiency (Nitrogen)",
  //     image: Abio,
  //     category: "Abiotic Disorders",
  //     biological_name: "N/A",
  //     description: "Yellowing of older leaves due to lack of nitrogen.",
  //     prevention: "Regularly test soil and apply nitrogen-rich fertilizers.",
  //     pesticide: "N/A",
  //     fertilizer: "Urea or ammonium nitrate",
  //     fertilizer_link: "https://example.com/fertilizer5"
  //   },
  //   {
  //     id: "6",
  //     name: "Sunburn",
  //     image: Abio,
  //     category: "Abiotic Disorders",
  //     biological_name: "N/A",
  //     description: "White or brown dry spots on leaves due to intense sunlight.",
  //     prevention: "Provide partial shade and water adequately.",
  //     pesticide: "N/A",
  //     fertilizer: "General-purpose balanced fertilizer",
  //     fertilizer_link: "https://example.com/fertilizer6"
  //   }
  // ];
  

  export const agri_display = [
    // 🌿 Fungal Diseases
    {
      id: "1",
      name: "Powdery Mildew",
      image: powdery,
      category: "Fungal Diseases",
      biological_name: "Erysiphe cichoracearum",
      description: "A white, powdery fungus that affects leaves, stems, and flowers.",
      prevention: "Ensure good air circulation, avoid overhead watering, and plant resistant varieties.",
      pesticide: "Sulfur-based fungicide or neem oil",
      fertilizer: "Balanced NPK fertilizer (10-10-10)",
      fertilizer_link: "https://example.com/fertilizer1",
      affected_plants: ["Tomato", "Cucumber", "Squash"]
    },
    {
      id: "2",
      name: "Downy Mildew",
      image: downy,
      category: "Fungal Diseases",
      biological_name: "Peronospora spp.",
      description: "Causes yellow to brown angular leaf spots with fuzzy growth underneath.",
      prevention: "Improve air flow, remove infected leaves, and use resistant varieties.",
      pesticide: "Copper-based fungicide",
      fertilizer: "Phosphorus-rich fertilizer",
      fertilizer_link: "https://example.com/fertilizer2",
      affected_plants: ["Cucumber", "Grapes", "Lettuce"]
    },
    {
      id: "3",
      name: "Rust",
      image: rust,
      category: "Fungal Diseases",
      biological_name: "Puccinia spp.",
      description: "Orange, rust-colored pustules on wheat leaves.",
      prevention: "Avoid planting in poorly drained soil and reduce plant density.",
      pesticide: "Tebuconazole fungicide",
      fertilizer: "High nitrogen fertilizer to promote growth.",
      fertilizer_link: "https://example.com/fertilizer_wheat_1",
      affected_plants: ["Wheat", "Barley", "Rye"]
    },
    {
      id: "4",
      name: "Late Blight",
      image: late,
      category: "Fungal Diseases",
      biological_name: "Phytophthora infestans",
      description: "Water-soaked lesions on potato leaves with grayish-brown patches.",
      prevention: "Plant resistant varieties and space plants for good airflow.",
      pesticide: "Copper fungicides or metalaxyl.",
      fertilizer: "Potassium-rich fertilizer to strengthen plant resistance.",
      fertilizer_link: "https://example.com/fertilizer_potato_1",
      affected_plants: ["Potato", "Tomato"]
    },
    {
      id: "5",
      name: "Black Spot",
      image: black,
      category: "Fungal Diseases",
      biological_name: "Diplocarpon rosae",
      description: "Dark spots with fringed edges on rose leaves.",
      prevention: "Water at the base of plants and remove infected leaves.",
      pesticide: "Myclobutanil fungicide",
      fertilizer: "Balanced fertilizer with emphasis on potassium.",
      fertilizer_link: "https://example.com/fertilizer_rose_1",
      affected_plants: ["Rose"]
    },
  
    // 🦠 Bacterial Diseases
    {
      id: "6",
      name: "Bacterial Leaf Spot",
      image: B_leaf,
      category: "Bacterial Diseases",
      biological_name: "Xanthomonas campestris",
      description: "Causes water-soaked spots on leaves that turn brown or black.",
      prevention: "Avoid overhead watering and handle plants gently to prevent wounding.",
      pesticide: "Copper-based bactericide",
      fertilizer: "Organic compost or manure",
      fertilizer_link: "https://example.com/fertilizer3",
      affected_plants: ["Tomato", "Pepper", "Cabbage"]
    },
    {
      id: "7",
      name: "Bacterial Wilt",
      image: B_wilt,
      category: "Bacterial Diseases",
      biological_name: "Ralstonia solanacearum",
      description: "Sudden wilting of leaves with brown discoloration in vascular tissues.",
      prevention: "Crop rotation and resistant plant varieties.",
      pesticide: "Streptomycin sulfate (only under professional guidance)",
      fertilizer: "Nitrogen-rich fertilizer",
      fertilizer_link: "https://example.com/fertilizer4",
      affected_plants: ["Cucumber", "Tomato", "Pepper"]
    },
    {
      id: "8",
      name: "Fire Blight",
      image: B_fire,
      category: "Bacterial Diseases",
      biological_name: "Erwinia amylovora",
      description: "Blackened, shriveled leaves and stems on apple trees.",
      prevention: "Prune infected branches and apply antibiotics.",
      pesticide: "Streptomycin",
      fertilizer: "Balanced fertilizer for apple trees with micronutrients.",
      fertilizer_link: "https://example.com/fertilizer_apple_1",
      affected_plants: ["Apple", "Pear", "Quince"]
    },
    {
      id: "9",
      name: "Bacterial Spot",
      image: B_spot,
      category: "Bacterial Diseases",
      biological_name: "Xanthomonas campestris",
      description: "Water-soaked lesions on pepper leaves that turn dark.",
      prevention: "Remove infected plant debris and rotate crops.",
      pesticide: "Copper-based sprays for bacterial control.",
      fertilizer: "Balanced fertilizer with high potassium.",
      fertilizer_link: "https://example.com/fertilizer_pepper_1",
      affected_plants: ["Pepper", "Tomato", "Eggplant"]
    },
    {
      id: "10",
      name: "Soft Rot",
      image: soft_rot,
      category: "Bacterial Diseases",
      biological_name: "Pectobacterium spp.",
      description: "Slimy, decaying tissue on cabbage heads.",
      prevention: "Avoid over-watering and provide good drainage.",
      pesticide: "Chlorothalonil",
      fertilizer: "Balanced NPK fertilizer with high nitrogen.",
      fertilizer_link: "https://example.com/fertilizer_cabbage_1",
      affected_plants: ["Cabbage", "Carrot", "Potato"]
    },
  
    // 🌬️ Abiotic Disorders
    {
      id: "11",
      name: "Nutrient Deficiency (Nitrogen)",
      image: "https://yourdomain.com/images/abio_nitrogen.jpg",
      category: "Abiotic Disorders",
      biological_name: "N/A",
      description: "Yellowing of older leaves due to lack of nitrogen.",
      prevention: "Regularly test soil and apply nitrogen-rich fertilizers.",
      pesticide: "N/A",
      fertilizer: "Urea or ammonium nitrate",
      fertilizer_link: "https://example.com/fertilizer5",
      affected_plants: ["Tomato", "Lettuce", "Corn"]
    },
    {
      id: "12",
      name: "Sunburn",
      image: "https://yourdomain.com/images/abio_sunburn.jpg",
      category: "Abiotic Disorders",
      biological_name: "N/A",
      description: "White or brown dry spots on leaves due to intense sunlight.",
      prevention: "Provide partial shade and water adequately.",
      pesticide: "N/A",
      fertilizer: "General-purpose balanced fertilizer",
      fertilizer_link: "https://example.com/fertilizer6",
      affected_plants: ["Tomato", "Cucumber", "Pepper"]
    },
    {
      id: "13",
      name: "Water Stress (Drought)",
      image: "https://yourdomain.com/images/abio_drought.jpg",
      category: "Abiotic Disorders",
      biological_name: "N/A",
      description: "Wilting and browning of leaf edges due to insufficient water.",
      prevention: "Maintain consistent watering schedules and use mulch.",
      pesticide: "N/A",
      fertilizer: "Organic compost or humic acid",
      fertilizer_link: "https://example.com/fertilizer7",
      affected_plants: ["Beans", "Spinach", "Maize"]
    },
    {
      id: "14",
      name: "Salinity Stress",
      image: "https://yourdomain.com/images/abio_salinity.jpg",
      category: "Abiotic Disorders",
      biological_name: "N/A",
      description: "Leaf burn and stunted growth caused by excess salt in soil.",
      prevention: "Leach soil with fresh water and use salt-tolerant crops.",
      pesticide: "N/A",
      fertilizer: "Gypsum-based soil conditioners",
      fertilizer_link: "https://example.com/fertilizer8",
      affected_plants: ["Rice", "Onion", "Wheat"]
    },
    {
      id: "15",
      name: "Nutrient Deficiency (Iron)",
      image: "https://yourdomain.com/images/abio_iron.jpg",
      category: "Abiotic Disorders",
      biological_name: "N/A",
      description: "Interveinal chlorosis in young leaves due to lack of iron.",
      prevention: "Apply iron chelates or foliar sprays.",
      pesticide: "N/A",
      fertilizer: "Iron chelate or ferrous sulfate",
      fertilizer_link: "https://example.com/fertilizer9",
      affected_plants: ["Soybean", "Grapes", "Citrus"]
    },
  
    // 🌱 Downy Mildew
    {
      id: "16",
      name: "Downy Mildew (Grapes)",
      image: "https://yourdomain.com/images/downy_mildew_grapes.jpg",
      category: "Downy Mildew",
      biological_name: "Plasmopara viticola",
      description: "Causes yellowing and downy growth on the underside of grape leaves.",
      prevention: "Improve air circulation and remove affected leaves.",
      pesticide: "Copper-based fungicide",
      fertilizer: "Phosphorus-rich fertilizer",
      fertilizer_link: "https://example.com/fertilizer_grape_1",
      affected_plants: ["Grape"]
    },
    {
      id: "17",
      name: "Downy Mildew (Lettuce)",
      image: "https://yourdomain.com/images/downy_mildew_lettuce.jpg",
      category: "Downy Mildew",
      biological_name: "Bremia lactucae",
      description: "Water-soaked lesions followed by yellowing of the leaves.",
      prevention: "Ensure good air flow and space plants.",
      pesticide: "Copper fungicide",
      fertilizer: "Balanced fertilizer with phosphorus and potassium",
      fertilizer_link: "https://example.com/fertilizer_lettuce_1",
      affected_plants: ["Lettuce"]
    },
  
    // 🐞 Leaf Miner
    {
      id: "18",
      name: "Leaf Miner (Tomato)",
      image: "https://yourdomain.com/images/leaf_miner_tomato.jpg",
      category: "Leaf Miner",
      biological_name: "Liriomyza spp.",
      description: "Tunnels in leaves caused by the larvae of leaf miners.",
      prevention: "Remove affected leaves and use row covers.",
      pesticide: "Insecticidal soap or neem oil",
      fertilizer: "Balanced NPK fertilizer",
      fertilizer_link: "https://example.com/fertilizer_tomato_1",
      affected_plants: ["Tomato"]
    },
  
    // 🌾 Root and Stem Rot
    {
      id: "19",
      name: "Root Rot (Potato)",
      image: "https://yourdomain.com/images/root_rot_potato.jpg",
      category: "Root and Stem Rot",
      biological_name: "Pythium spp.",
      description: "Soft, mushy roots that turn dark brown or black.",
      prevention: "Ensure good drainage and avoid over-watering.",
      pesticide: "Copper-based fungicide",
      fertilizer: "Balanced fertilizer with high phosphorus",
      fertilizer_link: "https://example.com/fertilizer_potato_2",
      affected_plants: ["Potato"]
    },
  
    // 🌾 Seed and Fruit Diseases
    {
      id: "20",
      name: "Fruit Rot (Apple)",
      image: "https://yourdomain.com/images/fruit_rot_apple.jpg",
      category: "Seed and Fruit Diseases",
      biological_name: "Monilinia fructigena",
      description: "Soft, brown lesions on apples with a characteristic moldy smell.",
      prevention: "Harvest fruit early and remove fallen fruit.",
      pesticide: "Captan fungicide",
      fertilizer: "Balanced NPK fertilizer with micronutrients",
      fertilizer_link: "https://example.com/fertilizer_apple_2",
      affected_plants: ["Apple"]
    }
  ];
  





export const assets = {
  Header,
  logo,
  add_green,
  add_white,
  app_store,
  bag_icon,
  basket_icon,
  cross_icon,
  facebook_icon,
  linkedin_icon,
  logout_icon,
  menu_dairy,
  menu_fruits,
  menu_millets,
  menu_spice,
  menu_veg,
  parcel_icon,
  play_store,
  profile_icon,
  rating_stars,
  remove_icon_red,
  search_icon,
  selector_icon,
  twitter_icon,
};

export const menu_list = [
  {
    menu_name: "vegetable",
    menu_image: menu_veg,
  },
  {
    menu_name: "dairy",
    menu_image: menu_dairy,
  },
  {
    menu_name: "millets",
    menu_image: menu_millets,
  },
  {
    menu_name: "spices",
    menu_image: menu_spice,
  },
  {
    menu_name: "fruits",
    menu_image: menu_fruits,
  },
];



export const product_list = [
  {
    id: "1",
    name: "Tomato",
    image: tomatoImg,
    price: 20,
    farmerName: "John Doe",
    location: "Farm A, California",
    category: "vegetable",
  },
  {
    id: "2",
    name: "Cheese",
    image: ches,
    price: 20,
    farmerName: "Jane Doe",
    location: "Farm B, California",
    category: "dairy",
  },
  {
    id: "3",
    name: "Wheat",
    image: wheat,
    price: 20,
    farmerName: "Jane Doe",
    location: "Farm B, California",
    category: "millets",
  },
];




