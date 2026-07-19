window.PROMPT_DETECTIVE_DATA = {
  dataset: "M4-ready-01",
  roundSize: 1,
  chipOptionsPerImage: 10,
  categories: {
    "Artistic Style": [
      "Art Nouveau",
      "Soft focus",
      "High contrast",
      "Futuristic",
      "Noir",
      "Cyberpunk",
      "Pastel",
      "Minimalist"
    ],
    "Medium": [
      "Oil painting",
      "Weaving",
      "Acrylic",
      "Gouache",
      "3D rendering",
      "Charcoal",
      "Screen print",
      "Polaroid"
    ],
    "Real-World or Fantasy": [
      "Mythical creatures",
      "Documentary style",
      "Photorealistic",
      "Urban fantasy",
      "Historical accuracy",
      "Everyday life",
      "Dreamlike atmosphere",
      "Supernatural realism"
    ],
    "Color Scheme": [
      "Neon glow",
      "Shadowy grayscale",
      "Grayscale",
      "High contrast",
      "Sepia tone",
      "Dreamy faded colors",
      "Noir-style tones",
      "Muted pastels"
    ],
    "Image Detail / Output Quality": [
      "Print-quality look",
      "Crisp edges",
      "Clean medium-resolution image",
      "Clean background and readable silhouette",
      "Product photography quality",
      "High-resolution image",
      "Ultra-detailed image",
      "Editorial-quality image"
    ],
    "Theme or Concept": [
      "Dreams and consciousness",
      "Infinite possibilities",
      "Romantic and dreamy",
      "Mysterious and enigmatic",
      "Duality and contrast",
      "Celestial wonders",
      "Volcanic eruption",
      "Retro 1980s aesthetic"
    ],
    "Realism or Abstraction": [
      "Soft realism",
      "Cosmic abstraction",
      "Natural proportions",
      "Symbolic representation",
      "Distorted perspective",
      "Chaotic forms",
      "Cubist composition",
      "Minimal abstraction"
    ],
    "Texture and Material": [
      "Coarse sand",
      "Cracked glass",
      "Puffy clouds",
      "Velvet soft",
      "Metallic foil",
      "Woven linen",
      "Silky smooth",
      "Frosted glass"
    ],
    "Composition": [
      "Blurred background",
      "Group arrangement",
      "Close-up",
      "Isolated subject",
      "Vanishing point",
      "Centered composition",
      "Rule of thirds",
      "Layered composition"
    ],
    "Lighting": [
      "Ethereal glow",
      "Silhouetted",
      "Bioluminescent",
      "Soft daylight",
      "Studio lighting",
      "Hard shadows",
      "Golden hour",
      "Diffused light"
    ]
  },
  items: [
    {
      id: "sunglasses-campaign",
      status: "ready",
      title: "Sunglasses Campaign",
      image: "images/sunglasses-campaign.png",
      visibleBrief: "marketing campaign for sunglasses",
      aspectRatio: "Widescreen, 16:9",
      answers: [
        { category: "Artistic Style", term: "Art Nouveau" },
        { category: "Medium", term: "Oil painting" },
        { category: "Real-World or Fantasy", term: "Mythical creatures" },
        { category: "Color Scheme", term: "Neon glow" },
        { category: "Image Detail / Output Quality", term: "Print-quality look" }
      ]
    },
    {
      id: "classic-polo-mockup",
      status: "ready",
      title: "Classic Polo Mockup",
      image: "images/classic-polo-mockup.png",
      visibleBrief: "product mockups of classic polos",
      aspectRatio: "Vertical social post, 4:5",
      answers: [
        { category: "Theme or Concept", term: "Dreams and consciousness" },
        { category: "Artistic Style", term: "Soft focus" },
        { category: "Medium", term: "Weaving" },
        { category: "Realism or Abstraction", term: "Soft realism" },
        { category: "Texture and Material", term: "Coarse sand" }
      ]
    },
    {
      id: "fragrance-bottle-mockup",
      status: "ready",
      title: "Fragrance Bottle Mockup",
      image: "images/fragrance-bottle-mockup.png",
      visibleBrief: "product mockup for a fashion fragrance",
      aspectRatio: "Portrait, 3:4",
      answers: [
        { category: "Composition", term: "Blurred background" },
        { category: "Texture and Material", term: "Cracked glass" },
        { category: "Image Detail / Output Quality", term: "Crisp edges" },
        { category: "Medium", term: "Acrylic" },
        { category: "Lighting", term: "Ethereal glow" }
      ]
    },
    {
      id: "outerwear-lookbook",
      status: "ready",
      title: "Outerwear Lookbook",
      image: "images/outerwear-lookbook.png",
      visibleBrief: "lookbook image for a new outerwear collection",
      aspectRatio: "Flat lay crop",
      answers: [
        { category: "Color Scheme", term: "Shadowy grayscale" },
        { category: "Real-World or Fantasy", term: "Documentary style" },
        { category: "Image Detail / Output Quality", term: "Clean medium-resolution image" },
        { category: "Realism or Abstraction", term: "Cosmic abstraction" },
        { category: "Composition", term: "Group arrangement" }
      ]
    },
    {
      id: "swimwear-resort-post",
      status: "ready",
      title: "Swimwear Resort Post",
      image: "images/swimwear-resort-post.png",
      visibleBrief: "social media post for a resort swimwear collection",
      aspectRatio: "Story / reel format, 9:16",
      answers: [
        { category: "Lighting", term: "Silhouetted" },
        { category: "Color Scheme", term: "Grayscale" },
        { category: "Real-World or Fantasy", term: "Photorealistic" },
        { category: "Artistic Style", term: "High contrast" },
        { category: "Composition", term: "Close-up" }
      ]
    },
    {
      id: "vintage-handbag-feature",
      status: "ready",
      title: "Vintage Handbag Feature",
      image: "images/vintage-handbag-feature.png",
      visibleBrief: "editorial product feature for a vintage-inspired handbag",
      aspectRatio: "Ultra-wide, 21:9",
      answers: [
        { category: "Realism or Abstraction", term: "Natural proportions" },
        { category: "Medium", term: "Gouache" },
        { category: "Composition", term: "Isolated subject" },
        { category: "Lighting", term: "Bioluminescent" },
        { category: "Image Detail / Output Quality", term: "Clean background and readable silhouette" }
      ]
    }
  ]
};
