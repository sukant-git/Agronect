const faqs = [
    {
      keywords: ["tomato", "grow tomato", "plant tomato"],
      answer: "Tomatoes need full sunlight, well-drained soil, and regular watering. Plant them deeply for strong roots. Use organic compost or cow dung as fertilizer.",
    },
    {
      keywords: ["fertilizer", "best fertilizer"],
      answer: "Use compost, cow dung, or vermicompost. NPK (Nitrogen, Phosphorus, Potassium) is essential for plant health.",
    },
    {
      keywords: ["pesticide", "natural pesticide"],
      answer: "Neem oil, garlic spray, and soap water are natural pesticides. Spray in morning or evening to avoid evaporation.",
    },
    {
      keywords: ["beginner", "start farming"],
      answer: "Start with easy crops like spinach, radish, and tomato. Use compost and water regularly. Avoid chemicals initially.",
    },
    {
      keywords: ["vitamin", "vegetable vitamin"],
      answer: "Carrots = Vitamin A, Spinach = Iron, Tomato = Vitamin C, Beans = Protein.",
    },
    {
      keywords: ["watering", "when to water"],
      answer: "Water early morning or late evening to reduce evaporation.",
    },
    {
      keywords: ["soil", "soil preparation"],
      answer: "Loosen soil 12 inches deep. Add organic matter. pH of 6–7 is ideal for most crops.",
    },
    {
      keywords: ["sunlight", "how much sunlight"],
      answer: "Most crops need 6–8 hours of sunlight. Leafy greens like spinach can grow in partial shade.",
    },
    {
      keywords: ["crop rotation"],
      answer: "Rotate crops to avoid pests and soil depletion. Alternate leafy, root, and fruit crops.",
    },
    {
      keywords: ["composting", "how to compost"],
      answer: "Use dry leaves and kitchen waste. Avoid dairy or oily items. Turn compost weekly.",
    },
    {
      keywords: ["mulching", "what is mulching"],
      answer: "Mulching covers soil with straw, leaves, or plastic to retain moisture and prevent weeds.",
    },
    {
      keywords: ["brinjal", "grow brinjal"],
      answer: "Brinjal requires warm climate, compost-rich soil, and regular watering. Use neem spray for pests.",
    },
    {
      keywords: ["organic farming"],
      answer: "Avoid chemicals. Use natural fertilizers and pesticides. Promote soil health and biodiversity.",
    },
    { 
      keywords: ["seasonal crops"],
      answer: "Grow crops based on season: Summer – okra, rainy – paddy, winter – cauliflower.",
    },
    {
      keywords: ["irrigation", "types of irrigation"],
      answer: "Use drip for water-saving, sprinkler for uniform coverage, or furrow for row crops.",
    },
    {
      keywords: ["cow dung", "organic manure"],
      answer: "Cow dung enriches soil and improves microbial activity. Mix well before applying.",
    },
    {
      keywords: ["green manure"],
      answer: "Grow plants like sunhemp, then plough them into soil to add nutrients.",
    },
    {
      keywords: ["pH level", "soil pH"],
      answer: "Ideal soil pH is 6.0 to 7.5 for most vegetables.",
    },
    {
      keywords: ["paddy", "grow rice"],
      answer: "Needs flooded fields, clay soil, and transplanting method. Harvest in 3-4 months.",
    },
    {
      keywords: ["weeds", "remove weeds"],
      answer: "Use mulching, manual removal, or tools like hoes to remove weeds regularly.",
    },
    {
      keywords: ["tool", "farming tools"],
      answer: "Basic tools: hoe, sickle, spade, watering can, hand weeder.",
    },
    {
      keywords: ["okra", "grow ladyfinger"],
      answer: "Plant in warm soil, space properly, and harvest regularly for tender pods.",
    },
    {
      keywords: ["vermicompost"],
      answer: "Made using earthworms and organic waste. Rich in nutrients and great for all crops.",
    },
    {
      keywords: ["pest", "control pest"],
      answer: "Use neem oil, crop rotation, and handpicking for pest control.",
    },
    {
      keywords: ["greenhouse", "polyhouse"],
      answer: "Controlled environment farming inside polyhouses helps grow crops year-round.",
    },
    {
    keywords: ["tomato", "grow tomato", "plant tomato", "thakkali"],
    answer: "Tomatoes (Thakkali) need 6-8 hours of sunlight and well-drained loamy soil. Plant seedlings 2 feet apart, water regularly, and use organic compost or cow dung manure. Stake plants to support heavy fruits and avoid waterlogging.",
  },
  {
    keywords: ["okra", "grow okra", "ladyfinger", "vendakkai"],
    answer: "Okra (Vendakkai) prefers warm sandy loam soil. Sow seeds 1 inch deep and 12 inches apart. Water consistently but do not overwater. Harvest tender pods regularly to encourage growth.",
  },
  {
    keywords: ["brinjal", "grow brinjal", "eggplant", "kovaikkai"],
    answer: "Brinjal (Kovaikkai) thrives in warm climate with rich soil. Use well-rotted compost and maintain even moisture. Protect from pests like fruit borer using neem oil sprays.",
  },
  {
    keywords: ["paddy", "grow rice", "nel", "paddy farming"],
    answer: "Paddy (Nel) needs flooded fields and clay soil. Transplant seedlings from nursery to main field maintaining 5-6 cm water level during vegetative phase. Use nitrogen fertilizers for healthy growth.",
  },
  {
    keywords: ["banana", "grow banana", "vaazhaipazham"],
    answer: "Banana (Vaazhaipazham) requires fertile, well-drained soil with consistent watering. Use organic manure and mulch to conserve moisture. Stake plants to protect from strong winds.",
  },
  {
    keywords: ["mango", "grow mango", "maambazham"],
    answer: "Mango (Maambazham) grows best in deep, well-drained soils. Requires full sunlight and moderate watering. Prune regularly for good airflow and fruit production.",
  },
  {
    keywords: ["coconut", "grow coconut", "thengu"],
    answer: "Coconut palms (Thengu) prefer sandy, well-drained soils near coastlines. Requires high humidity and plenty of sunlight. Water young palms frequently and apply organic manure.",
  },
  {
    keywords: ["drumstick", "grow drumstick", "murungai"],
    answer: "Drumstick tree (Murungai) grows well in tropical climates. Plant in well-drained soil with full sun exposure. Regular watering and pruning encourages healthy pods.",
  },
  {
    keywords: ["sugarcane", "grow sugarcane", "karumbu"],
    answer: "Sugarcane (Karumbu) needs fertile, well-drained soil with plenty of moisture. Requires 10-12 months of warm weather and irrigation. Use organic fertilizers to enhance growth.",
  },
  {
    keywords: ["guava", "grow guava", "koyya"],
    answer: "Guava (Koyya) grows well in well-drained sandy loam soils. Needs full sunlight and moderate watering. Mulching helps retain soil moisture.",
  },

  // ===== Beginner Tips (10) =====
  {
    keywords: ["beginner farming", "start farming", "new farmer", "basic tips"],
    answer: "Start with easy crops like tomato, spinach, and radish. Use organic manure and water regularly. Avoid chemical pesticides initially and monitor plant growth carefully.",
  },
  {
    keywords: ["soil preparation", "prepare soil", "soil tips"],
    answer: "Loosen soil to 12 inches deep. Add compost or cow dung manure to enrich fertility. Check soil pH, ideally between 6 to 7 for most crops.",
  },
  {
    keywords: ["watering tips", "how to water", "watering"],
    answer: "Water plants early morning or late evening to reduce evaporation. Use drip irrigation if available to save water and deliver it directly to roots.",
  },
  {
    keywords: ["seed selection", "choose seeds"],
    answer: "Choose certified seeds from reliable sources. Select varieties suitable for your climate and soil to ensure good yield and disease resistance.",
  },
  {
    keywords: ["crop spacing", "plant spacing"],
    answer: "Maintain proper spacing between plants for adequate sunlight, airflow, and nutrient absorption. For example, tomato plants need about 2 feet between each.",
  },
  {
    keywords: ["weeding", "remove weeds", "weeds"],
    answer: "Remove weeds regularly to prevent competition for nutrients and water. Use mulching or manual removal to keep fields weed-free.",
  },
  {
    keywords: ["mulching benefits", "mulch tips"],
    answer: "Mulching conserves soil moisture, reduces weed growth, and regulates soil temperature. Use straw, leaves, or plastic sheets as mulch.",
  },
  {
    keywords: ["fertilizer use", "apply fertilizer"],
    answer: "Use organic fertilizers like compost or cow dung. Avoid excess chemical fertilizers as they can harm soil health over time.",
  },
  {
    keywords: ["disease prevention", "plant diseases", "prevent diseases"],
    answer: "Maintain crop hygiene by removing infected plants. Rotate crops annually to avoid disease buildup. Use resistant varieties and natural remedies.",
  },
  {
    keywords: ["harvesting tips", "when to harvest"],
    answer: "Harvest crops at the right maturity for best taste and yield. For example, tomatoes are ready when fully red and firm but not overripe.",
  },

  // ===== Pest Control (10) =====
  {
    keywords: ["pest control", "control pests", "natural pesticides", "pesticide"],
    answer: "Use neem oil sprays, garlic, or chili-based natural pesticides. Handpick pests and practice crop rotation to reduce pest buildup.",
  },
  {
    keywords: ["fruit borer", "pest tomato", "pest brinjal"],
    answer: "Fruit borer attacks tomato and brinjal. Use pheromone traps and neem oil regularly. Remove and destroy infested fruits to control spread.",
  },
  {
    keywords: ["aphids", "control aphids"],
    answer: "Aphids suck sap from plants causing wilting. Spray insecticidal soap or neem oil early morning. Encourage natural predators like ladybugs.",
  },
  {
    keywords: ["whitefly", "control whitefly"],
    answer: "Whiteflies feed on underside of leaves causing yellowing. Use yellow sticky traps and neem oil spray. Avoid excessive nitrogen fertilizer which attracts them.",
  },
  {
    keywords: ["stem borer", "control stem borer"],
    answer: "Stem borers bore into stems causing wilting. Remove affected plants and use neem-based pesticides. Crop rotation also reduces their population.",
  },
  {
    keywords: ["leaf spot", "control leaf spot"],
    answer: "Leaf spot causes brown lesions on leaves. Remove infected leaves and avoid overhead watering. Use copper fungicide sprays if needed.",
  },
  {
    keywords: ["mealybugs", "control mealybugs"],
    answer: "Mealybugs appear as white cottony masses on stems. Use neem oil and insecticidal soap. Remove heavily infested plant parts.",
  },
  {
    keywords: ["mites", "control mites"],
    answer: "Spider mites cause yellow spots and webbing. Spray water regularly to remove mites and use miticides if severe.",
  },
  {
    keywords: ["pesticide safety", "use pesticides safely"],
    answer: "Use pesticides according to label instructions. Wear protective gear and avoid spraying during windy conditions to prevent drift.",
  },
  {
    keywords: ["natural predators", "beneficial insects"],
    answer: "Encourage beneficial insects like ladybugs, lacewings, and parasitic wasps which naturally control pests.",
  },

  // ===== Essential Tips (10) =====
  {
    keywords: ["fertilizer", "best fertilizer", "nutrients"],
    answer: "Apply balanced fertilizers with NPK (Nitrogen, Phosphorus, Potassium). Use organic manure like compost or vermicompost to improve soil health.",
  },
  {
    keywords: ["composting", "how to compost"],
    answer: "Compost dry leaves, kitchen waste, and green materials avoiding dairy or oily foods. Turn the pile weekly for aeration and faster decomposition.",
  },
  {
    keywords: ["crop rotation", "rotate crops"],
    answer: "Rotate crops annually to prevent pest buildup and replenish soil nutrients. Alternate legumes with cereals and vegetables for balanced nutrition.",
  },
  {
    keywords: ["irrigation", "water methods"],
    answer: "Use drip irrigation to save water and ensure uniform watering. Sprinklers are good for some crops, while furrow irrigation suits row crops.",
  },
  {
    keywords: ["mulching", "benefits of mulching"],
    answer: "Mulching retains moisture, suppresses weeds, and regulates soil temperature. Use organic mulch like straw or dry leaves.",
  },
  {
    keywords: ["soil testing", "test soil"],
    answer: "Test soil pH and nutrient levels regularly. Ideal pH for most crops is 6-7. Adjust with lime or sulfur as needed.",
  },
  {
    keywords: ["organic farming", "organic tips"],
    answer: "Avoid synthetic chemicals. Use natural fertilizers, crop rotation, and biological pest control to maintain soil and plant health.",
  },
  {
    keywords: ["weed management", "weed control"],
    answer: "Use mulching, manual weeding, and cover crops to suppress weeds. Avoid herbicide overuse to protect soil microbes.",
  },
  {
    keywords: ["harvest storage", "store crops"],
    answer: "Store harvested crops in cool, dry places to avoid spoilage. Use clean, ventilated storage bins for longer shelf life.",
  },
  {
    keywords: ["post harvest", "handling crops"],
    answer: "Handle crops gently during harvest and transport to reduce damage. Clean and sort produce before storage or sale.",
  },
  ];
  
  export default faqs;
